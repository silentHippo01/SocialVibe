import { FC, memo, useCallback, useEffect } from "react";
import cls from './LoginForm.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import i18n from "shared/config/i18n/i18n";
import { ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSchema";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducersList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
    className?: string;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const {
        className,
    } = props; 

    const {t} = useTranslation();
    const dispatch = useDispatch();
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

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
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