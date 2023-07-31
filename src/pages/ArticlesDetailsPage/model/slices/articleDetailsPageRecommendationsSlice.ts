import {
    EntityState,
    PayloadAction,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider';
import { articleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';
import { Article } from 'entities/Article';
import { fetchhArticleRecommendations } from '../services/fetchhArticleRecommendations/fetchhArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<articleDetailsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchhArticleRecommendations.pending, (state) => {
            state.isLoading = true;
            state.error = undefined;
          })
    
          .addCase(fetchhArticleRecommendations.fulfilled, (
            state, 
            action
          ) => {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload)
        })
    
          .addCase(fetchhArticleRecommendations.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          })
      }
})

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
export const { actions: articleDetailsPageRecommendationsAction } = articleDetailsPageRecommendationsSlice;