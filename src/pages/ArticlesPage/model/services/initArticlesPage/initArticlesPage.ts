import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/ArticlePageSelectors";
import { ArticlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(ArticlesPageActions.initState())
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
      
    }
);

initArticlesPage.pending