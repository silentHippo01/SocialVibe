import { useTranslation } from 'react-i18next';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState } from 'react';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_ID } from 'shared/const/localStorage';
import { Page } from 'widgets/Page/Page';
import { ArticleView } from '../../model/consts/consts';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

const Header = () => <ArticlesPageFilters />;

// const getSkeletons = () => {
//     return new Array(3)
//         .fill(0)
//         .map((_, index) => (
//             <ArticleListItemSkeleton className={cls.card} key={index} view={ArticleView.BIG}/>
//         ))
// }

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
        ))
}


export const ArticleList = (props: ArticleListProps) => {

    const {
        className,
        articles, 
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart
    } = props;

    const { t } = useTranslation();
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const VirtuosoGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        const paged = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_ID) || 1;
        setSelectedArticleId(+paged)
    }, [])

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if(view === 'SMALL'){
            timeoutId = setTimeout(() => {
                if(VirtuosoGridRef.current){
                    VirtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100)
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view])

    // const renderArticle = (index: number, article: Article) => (
    //     <ArticleListItem 
    //         article={article}  
    //         view={view}
    //         className={cls.card}
    //         key={article.id}
    //         target={target}
    //         index={index}
    //     />
    // );

    const renderArticle = (article: Article) => (
        <ArticleListItem 
            article={article}  
            view={view}
            className={cls.card}
            key={article.id}
            target={target}
        />
    );

    // const Footer = memo(() => {
    //     if(isLoading){
    //         return (
    //             <div className={cls.skeleton}>
    //                 {getSkeletons()}
    //             </div>
    //         )
    //     }
    //     return null;
    // })

    if(!isLoading && !articles.length){
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')}/>
            </div>
        )
    }

    const ItemContainerComp: FC<{height: number, width: number; index: number}> = ({height, width, index}) => {
        return (
            <div className={cls.ItemContainer}>
                <ArticleListItemSkeleton key={index} view={view} className={cls.card}/> 
            </div>
        )
    }

    console.log(view)

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0
                ? articles.map(renderArticle)
                : null}
            {isLoading && getSkeletons(view)}
            {/* { view === 'BIG' ? (
                <Virtuoso 
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart} 
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid 
                    ref={VirtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ItemContainerComp,
                    }}
                    style={{ height: '100%' }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30
                    }}
                />
            )} */}
        </div>
    );
};
