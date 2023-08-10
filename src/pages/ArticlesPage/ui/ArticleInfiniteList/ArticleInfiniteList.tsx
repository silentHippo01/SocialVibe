import { ArticleList } from "entities/Article";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "../../model/selectors/ArticlePageSelectors";
import { getArticles } from "../../model/slices/ArticlesPageSlice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text/Text";

interface ArticleInfiniteListProps {
    classname?: string;
}

export const ArticleInfiniteList = (props: ArticleInfiniteListProps) => {
    const { classname } = props;
    const { t } = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    
    if(error) {
        return <Text text={t('Ошибка при загрузке статей')} />
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={classname}
        />
    );
};
