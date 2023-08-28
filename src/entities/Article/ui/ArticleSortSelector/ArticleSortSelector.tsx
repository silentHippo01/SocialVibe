import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SelectOption, Select } from '@/shared/ui/Select';
import { useCallback, useMemo } from 'react';
import { SortOrder } from '@/shared/types';
import { ArticleSortField } from './../../model/consts/consts';

interface ArticleSortSelectorProps {
    sort: ArticleSortField,
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const {
        sort,
        order,
        onChangeOrder,
        onChangeSort
    } = props;

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию')
        },
        {
            value: 'desc',
            content: t('убыванию')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам')
        }
    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [])}>
            <Select
                onChange={onChangeSort}
                options={sortFieldOptions}
                label={t('Сортировать по')}
                value={sort}
            />
            <Select
                onChange={onChangeOrder}
                options={orderOptions}
                label={t('По')}
                value={order}
                className={cls.order}
            />
        </div>
    );
};
