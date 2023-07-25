import {
    EntityState,
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlePageSchema } from '../types/ArticlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';


const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
)

const ArticlesPageSlice = createSlice({
    name: 'ArticlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: state => { 
          state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchArticlesList.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
          })
    
          .addCase(fetchArticlesList.fulfilled, (
            state, 
            action: PayloadAction<Article[]>
          ) => {
            state.isLoading = false;
            articlesAdapter.setAll(state, action.payload)
        })
    
          .addCase(fetchArticlesList.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
      }
})

export const { reducer: ArticlesPageReducer } = ArticlesPageSlice;
export const { actions: ArticlesPageActions } = ArticlesPageSlice;