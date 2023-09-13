import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { getArticlesPageInited } from "../../selectors/ArticlePageSelectors";
import { ArticlesPageActions } from '../../slices/ArticlesPageSlice';
import { fetchArticlesList } from '../fetchArticleList/fetchArticlesList';
import { ArticleSortField, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types/sort";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const { extra, rejectWithValue, getState, dispatch } = thunkAPI;
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if (orderFromUrl) {
                dispatch(ArticlesPageActions.setOrder(orderFromUrl))
            }

            if (sortFromUrl) {
                dispatch(ArticlesPageActions.setSort(sortFromUrl))
            }

            if (searchFromUrl) {
                dispatch(ArticlesPageActions.setSearch(searchFromUrl))
            }

            if (typeFromUrl) {
                dispatch(ArticlesPageActions.setType(typeFromUrl))
            }

            dispatch(ArticlesPageActions.initState())
            dispatch(fetchArticlesList({}));
        }
    }
);

initArticlesPage.pending