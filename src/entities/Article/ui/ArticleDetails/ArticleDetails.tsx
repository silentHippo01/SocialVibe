import { useTranslation } from "react-i18next";
import cls from './ArticleDetails.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { fetchArticleById } from "../../model/services/fetchArticleById";
import { useSelector } from "react-redux";
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from "../../model/selectors/articleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import Avatar from "shared/ui/Avatar/Avatar";
import EyeIcon from 'shared/assets/icon/ant-design_eye-outlined.svg';
import ECalendarIcon from 'shared/assets/icon/clarity_date-line.svg'
import { Icon } from "shared/ui/Icon/Icon";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleICodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {

    const {
        className,
        id,
    } = props;

    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    // const isLoading = true;
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch(block.type){
            case ArticleBlockType.CODE: 
                return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block}/>;
            case ArticleBlockType.IMAGE: 
                return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block}/>;
            case ArticleBlockType.TEXT: 
                return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block}/>;
            default: 
                return null;
        }
    }, [])

    useEffect(() => {
        if(__PROJECT__ !== 'storybook'){
            dispatch(fetchArticleById(id))
        }
    }, [dispatch, id])

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
                <Skeleton className={cls.skeleton} width='100%' height={200} />
            </div>
        )
    } else if (error) {
        content = (
            <Text
                align={TextAlign.CENTER}
                title={t('Произошла ошибка при загрузке статьи.')}
            />
        )
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar
                        size={200}
                        src={article?.img}
                        className={cls.avatar}
                    />
                </div>

                <Text
                    className={cls.Title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={TextSize.L}
                />

                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={EyeIcon}/>
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon className={cls.icon} Svg={ECalendarIcon}/>
                    <Text text={article?.createdAt} />
                </div>
                {article?.blocks.map(renderBlock)}
            </>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            <div className={classNames(cls.ArticleDetails, {}, [])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});