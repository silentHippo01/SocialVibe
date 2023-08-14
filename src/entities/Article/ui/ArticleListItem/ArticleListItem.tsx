import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import EyeIcon from 'shared/assets/icon/ant-design_eye-outlined.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import Avatar from 'shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';
import { HTMLAttributeAnchorTarget } from 'react';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_ID } from 'shared/const/localStorage';
import { ArticleBlockType, ArticleView } from '../../model/consts/consts';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView; 
    target?: HTMLAttributeAnchorTarget;
    index?: number;
}

export const ArticleListItem = (props: ArticleListItemProps) => {

    const {
        className,
        article,
        view,
        target,
        index
    } = props;

    const [isHover, bindHover] = useHover();
    const { t } = useTranslation('articlelist');

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    )

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_ID, JSON.stringify(index))
    }

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(block => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textblock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink 
                            to={RoutePath.article_details + article.id}
                            target={target}
                        >
                            <Button 
                                theme={ButtonTheme.OUTLINE}
                                onClick={handleButtonClick}
                            >
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink 
            to={RoutePath.article_details + article.id} 
            {...bindHover} 
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            target={target}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <img alt={article.title} src={article.img} className={cls.img} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
};
