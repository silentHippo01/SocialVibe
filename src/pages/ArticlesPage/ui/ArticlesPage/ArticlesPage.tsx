import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';
import { memo, useCallback } from "react";
import { DynamicModuleLoader, ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticlesPageReducer } from "../../model/slices/ArticlesPageSlice";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Page } from "@/widgets/Page/Page";
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";
import { useSearchParams } from "react-router-dom";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";

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
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams))
    });


    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {/* <ArticlesPageFilters /> */}
            {/* <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.list}
                onLoadNextPart={onLoadNextPart}
            /> */}

            <Page
                className={classNames(cls.ArticlesPage, {}, [classname])}
                onScrollEnd={onLoadNextPart}
            >
                <ArticlesPageFilters />
                <ArticleInfiniteList classname={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);

