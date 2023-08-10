import { rktApi } from 'shared/api/rtkApi';

const recommendationsApi = rktApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
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