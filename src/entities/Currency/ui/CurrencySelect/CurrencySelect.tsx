import { classNames } from "shared/lib/classNames/classNames";
import Select from "shared/ui/Select/Select";
import cls from './CurrencySelect.module.scss'
import { useTranslation } from "react-i18next";
import { Currency } from "../../model/types/Currency";
import { memo, useCallback } from "react";
import { ListBox } from "shared/ui/ListBox/ListBox";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.USD, content: Currency.USD },
    { value: Currency.EUR, content: Currency.EUR },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation();

    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange])

    return (
        <ListBox 
            className={className}
            value={value}
            items={options}
            defaultValue={t('Укажите валюту')}
            onChange={onChangeHandler}
            readonly={readonly}
            direction={'top right'}
            label={t('Укажите валюту')}
        />
    );
});
