import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticlesPage.module.scss';
import { memo } from "react";
import { Article, ArticleList, ArticleView } from "entities/Article";

export interface ArticlesPageProps {
    classname?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { classname } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticlesPage, {}, [classname])}>
            <ArticleList
                view={ArticleView.BIG} 
                articles={[]} 
            />
        </div>
    );
};

export default memo(ArticlesPage);

