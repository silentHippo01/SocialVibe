import { FC, memo, useCallback, useEffect } from "react";
import cls from './LoginForm.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import i18n from "shared/config/i18n/i18n";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo(({ className, onSuccess }) => {
    const {t} = useTranslation();
    const dispatch = useAppDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]); 

    const onLoginClick = useCallback( async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        if(result.meta.requestStatus === 'fulfilled'){
            onSuccess();
        }
        dispatch(loginByUsername({username, password}))
    }, [onSuccess, dispatch, username, password])

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
           <Text title={t('Форма авторизации')}/>
           {error && <Text text={i18n.t(error)} theme={TextTheme.ERROR}/>}
           <Input 
                type="text" 
                className={classNames(cls.input, {}, [])}
                placeholder={t('Введите имя:')}
                autoFocus
                onChange={onChangeUsername}
                value={username}
            />
           <Input 
                type="text" 
                className={classNames(cls.input, {}, [])}
                placeholder={t('Введите пароль')}
                onChange={onChangePassword}
                value={password}
            />
           <Button
                theme={ButtonTheme.OUTLINE} 
                className={classNames(cls.loginBtn)}
                onClick={onLoginClick}
                disabled={isLoading}
            >
                {t('Войти')}

           </Button>
        </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;