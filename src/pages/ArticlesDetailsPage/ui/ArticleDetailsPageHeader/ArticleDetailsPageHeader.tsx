import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './ArticleDetailsPageHeader.module.scss';
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useSelector } from "react-redux";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";

interface ArticleDetailsPageHeaderProps {

}

export const ArticleDetailsPageHeader = (props: ArticleDetailsPageHeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onArticleEdit = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article?.id]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [])}>
            <Button 
                theme={ButtonTheme.OUTLINE} 
                onClick={onBackToList}
            >
                {t('Назад к списку статей')}
            </Button>
            {canEdit && (<Button 
                className={cls.editBtn}
                theme={ButtonTheme.OUTLINE} 
                onClick={onArticleEdit}
            >
                {t('Редактировать')}
            </Button>)}
        </div>
    );
};
