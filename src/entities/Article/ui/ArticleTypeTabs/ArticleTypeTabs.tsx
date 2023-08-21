import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '../../model/consts/consts';
import { useCallback, useMemo } from 'react';

interface ArticleTypeTabsProps {
    className?: string;
    value: string;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {

    const { t } = useTranslation();
    const {
        className,
        value, 
        onChangeType
    } = props;

    
    const typeTabs = useMemo<TabItem[]>(() => [
        {
            value: ArticleType.ALL,
            content: t('Все статьи'),
        },
        {
            value: ArticleType.IT,
            content: t('IT'),
        },
        {
            value: ArticleType.ECONOMICS,
            content: t('Экономика'),
        },
        {
            value: ArticleType.SCIENCE,
            content: t('Наука'),
        }
    ], [t])

    const onTabClick = useCallback((tab: TabItem) => {
        onChangeType(tab.value as ArticleType)
    }, [])

    return (
        <Tabs 
            className={classNames("", {}, [className])} 
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
        />
         
    );
};
