import { ProfileCard, fetchProfileData, getProfileData, getProfileError, getProfileIsLoading, getProfileReadOnly, getProfileValidateErrors, profileActions, profileReducer } from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { classNames } from "shared/lib/classNames/classNames";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";
import { getProfileForm } from "entities/Profile";
import { Currency } from "entities/Currency/model/types/Currency";
import { Country } from "entities/Country";
import { TextTheme } from "shared/ui/Text/Text";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useParams } from "react-router-dom";
import { Page } from "widgets/Page/Page";

const reducers: ReducersList = {
    profile: profileReducer,
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const dispatch = useDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера при сохранении'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.NO_DATA]: t('Вы не ввели данные пользователя'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректно введеная страна'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Некорректные данные пользователя'),
    }
    
    useInitialEffect(() => {
    if (id) { 
        dispatch(fetchProfileData(id));
    }
    })

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ''}))
        console.log('change first');
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch]);
 
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <ProfilePageHeader />
                {validateErrors?.length && validateErrors.map((err) => (
                    <Text 
                        key={err}
                        theme={TextTheme.ERROR} 
                        text={validateErrorTranslates[err]}
                    />
                ))}
                <ProfileCard 
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;

//для асинхронных компонентов используется дефолтный экспорт