import { useCallback } from 'react';
import { Country } from '../model/types/Country';
import { t } from 'i18next';
import { ListBox } from '@/shared/ui/Popup';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
];


export const CountrySelect = (props: CountrySelectProps) => {

    const {
        className,
        value,
        onChange,
        readonly
    } = props;

    const onChangeHandler = useCallback(() => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            onChange={onChangeHandler}
            items={options}
            value={value}
            readonly={readonly}
            defaultValue={t('Укажите страну')}
            className={className}
            direction={'top right'}
            label={t('Укажите страну')}
        />
    );
};
