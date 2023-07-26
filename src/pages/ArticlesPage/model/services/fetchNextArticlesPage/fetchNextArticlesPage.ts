import { useSelector } from 'react-redux';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Article } from "entities/Article";
import { getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageLimit, getArticlesPageNum } from "../../selectors/ArticlePageSelectors";
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { ArticlesPageActions } from '../../slices/ArticlesPageSlice';

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState, dispatch} = thunkAPI;
        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());
        
        if (hasMore && !isLoading) {
            dispatch(ArticlesPageActions.setPage(page + 1));
            dispatch(fetchArticlesList({
                page: page + 1,
            }));
        }
    }
);

fetchNextArticlesPage.pending