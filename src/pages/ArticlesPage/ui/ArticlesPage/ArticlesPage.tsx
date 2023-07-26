import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from "react";
import { Article, ArticleList, ArticleView, ArticleViewSelector } from "entities/Article";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticlesPageActions, ArticlesPageReducer, getArticles } from "../../model/slices/ArticlesPageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticlesList } from "../../model/services/fetchArticleList/fetchArticlesList";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageHasMore, getArticlesPageIsLoading, getArticlesPageNum, getArticlesPageView } from "../../model/selectors/ArticlePageSelectors";
import { Page } from "shared/ui/Page/Page";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage";

export interface ArticlesPageProps {
    classname?: string;
}

const reducers: ReducersList = {
    articlesPage: ArticlesPageReducer,
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { classname } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);;

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(ArticlesPageActions.setView(view));
    }, [dispatch]);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(ArticlesPageActions.initState())
        dispatch(fetchArticlesList({
            page: 1,
        }));
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [classname])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

