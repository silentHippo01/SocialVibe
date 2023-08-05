import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';
import { memo, useCallback } from "react";
import { ArticleDetails, ArticleList } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { Text, TextSize } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { getArticleComments } from "../../model/slices/articleDetailsCommentsSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { AddCommentForm } from "features/addCommentForm";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { Page } from "widgets/Page/Page";
import { getArticleRecommendations } from "../../model/slices/articleDetailsPageRecommendationsSlice";
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations";
import { fetchhArticleRecommendations } from "../../model/services/fetchhArticleRecommendations/fetchhArticleRecommendations";
import { articleDetailsPageReducer } from "../../model/slices";
import { ArticleDetailsPageHeader } from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { VStack } from "shared/ui/Stack";

export interface ArticleDetailsPageProps {
    classname?: string;
}

const reducers: ReducersList = {
    // articleDetailsPage: articleDetailsPageReducer,
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { classname } = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchhArticleRecommendations());
    })

    if (!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
                {t('Статья не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <Text
                        size={TextSize.L}
                        className={cls.recommendationsTitle}
                        title={t('Рекомендуем: ')}
                    />
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cls.recommendations}
                        target={'_blank'}
                    />
                    <Text
                        size={TextSize.L}
                        className={cls.commentTitle}
                        title={t('Комментарии: ')}
                    />
                    <AddCommentForm onSendComment={onSendComment} />
                    <CommentList isLoading={commentsIsLoading} comments={comments} />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);