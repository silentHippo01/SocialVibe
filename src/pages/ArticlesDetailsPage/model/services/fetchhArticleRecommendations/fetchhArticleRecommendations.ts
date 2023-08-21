import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { Article } from "@/entities/Article";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const fetchhArticleRecommendations = createAsyncThunk<
    Article[], 
    void, 
    ThunkConfig<string>
    >(
    'articlesPage/fetchhArticleRecommendations',
    async (props, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI;

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                   _limit: 4,
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

fetchhArticleRecommendations.pending