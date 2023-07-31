import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "../types/article";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
    'articleDetails/fetchArticleById',
    async (articleId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Article>(`/articles/${articleId}`, {
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

fetchArticleById.pending