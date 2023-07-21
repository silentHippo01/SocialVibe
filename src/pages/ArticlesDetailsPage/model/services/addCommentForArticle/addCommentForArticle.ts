import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IComment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
// import { addCommentFormActions, getAddCommentFormText } from "features/addCommentForm";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//loginByUserName - создает асинхронный thunk

export const addCommentForArticle = createAsyncThunk<
    IComment, 
    string, 
    ThunkConfig<string>
>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {extra, dispatch, rejectWithValue, getState} = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if(!userData || !text || !article){
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<IComment>('/comments', {
                articleId: article?.id,
                userId: userData.id,
                text,
            })

            if(!response.data){
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

addCommentForArticle.pending