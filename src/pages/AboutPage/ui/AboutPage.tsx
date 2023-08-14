import { ArticleList } from 'entities/Article';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from 'pages/ArticlesPage';
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from 'pages/ArticlesPage/model/services/initArticlesPage/initArticlesPage';
import { getArticles } from 'pages/ArticlesPage/model/slices/ArticlesPageSlice';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Virtuoso } from 'react-virtuoso';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'widgets/Page/Page';

const AboutPage = () => {
  const { t, i18n } = useTranslation('about');

  const dispatch = useAppDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams);

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);
  console.log(articles);

  const onLoadNextPart = useCallback(() => {
      dispatch(fetchNextArticlesPage());
  }, [dispatch])

  // useInitialEffect(() => {
  //     dispatch(initArticlesPage(searchParams))
  // });

  return (
      // <Page>
          // {t('О сайте')}
          <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                onLoadNextPart={onLoadNextPart}
            />
      // </Page>
  );
};

export default AboutPage;
