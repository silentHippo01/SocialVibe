import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import cls from './ProfileCard.module.scss'
import { useTranslation } from "react-i18next";
import { TextAlign, TextTheme, Text } from "@/shared/ui/Text/Text";
import { Input } from "@/shared/ui/Input/Input";
import { Profile } from "../../model/types/profile";
import { Loader } from "@/shared/ui/Loader/Loader";
import Avatar from "@/shared/ui/Avatar/Avatar";
import { Currency, CurrencySelect } from "@/entities/Currency";
import { Country } from "@/entities/Country/model/types/Country";
import { CountrySelect } from "@/entities/Country";
import { HStack, VStack } from "@/shared/ui/Stack";

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean; 
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCountry?: (country: Country) => void;
    onChangeCurrency?: (currency: Currency) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profile');

    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeLastName,
        onChangeFirstName,
        onChangeAge,
        onChangeCity,
        onChangeUsername,
        onChangeAvatar,
        onChangeCountry,
        onChangeCurrency,
    } = props;

    if(isLoading){
        return(
            <HStack justify={"center"} max className={classNames(cls.ProfileCard, {[cls.loading]: true }, [className])}>
                <Loader />
            </HStack>
        )
    }

    if(error){
        return(
            <HStack justify={"center"} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text 
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при попытке загрузить профиль')}
                    text={t('Попробуйте перезагрузить страницу')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    }

    return (
        <VStack gap='8' max className={classNames(cls.ProfileCard, mods, [])}>
                {data?.avatar && (
                    <HStack justify={'center'} max >
                        <Avatar src={data?.avatar}/>
                    </HStack>
                )}
                <Input 
                    value={data?.first}
                    placeholder={t('Ваше имя:')}
                    className={cls.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                    data-testid={'ProfileCard.firstname'}
                />
                <Input 
                    value={data?.lastname}
                    placeholder={t('Ваше фамилия:')}
                    className={cls.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                    data-testid={'ProfileCard.lastname'}
                />
                <Input 
                    value={data?.age}
                    placeholder={t('Ваш возраст:')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                />
                <Input 
                    value={data?.city}
                    placeholder={t('Город: ')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                   <Input 
                    value={data?.avatar}
                    placeholder={t('Аватар: ')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />

               <CurrencySelect 
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
               />

               <CountrySelect 
                    className={cls.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
               />
            </VStack>
    );
};
