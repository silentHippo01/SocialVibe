import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
    'articlesPage/fetchCommentsByArticleId',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                }
            });

            if(!response.data){
                throw new Error();
            }
            
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

fetchArticlesList.pending