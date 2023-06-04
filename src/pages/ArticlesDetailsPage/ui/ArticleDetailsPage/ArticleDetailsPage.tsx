import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPage.module.scss';
import { memo } from "react";

export interface ArticleDetailsPageProps{
    classname?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {classname} = props;
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [classname])}>
            ARTICLE DETAILS PAGE
        </div>
    );
};

export default memo(ArticleDetailsPage);