import { Article } from '@/entities/Article';
import { rktApi } from '@/shared/api/rtkApi';

const recommendationsApi = rktApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit,
                }
            })
        })
    })
})

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;