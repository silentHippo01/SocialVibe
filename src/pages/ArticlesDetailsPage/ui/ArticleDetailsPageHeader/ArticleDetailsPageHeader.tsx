import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getRouteArticleEdit, getRouteArticles } from "@/shared/const/router";
import { useSelector } from "react-redux";
import { getUserAuthData } from "@/entities/User";
import { getArticleDetailsData } from "@/entities/Article";
import { getCanEditArticle } from "../../model/selectors/article";
import { HStack } from "@/shared/ui/Stack";

export const ArticleDetailsPageHeader = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    const onBackToList = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const onArticleEdit = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article?.id));
        }
    }, [navigate, article]);

    return (
        <HStack max justify={'between'} className={classNames('', {}, [])}>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onBackToList}
            >
                {t('Назад к списку статей')}
            </Button>
            {canEdit && (<Button
                theme={ButtonTheme.OUTLINE}
                onClick={onArticleEdit}
            >
                {t('Редактировать')}
            </Button>)}
        </HStack>
    );
};
