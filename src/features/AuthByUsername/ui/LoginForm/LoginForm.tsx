import { FC, memo, useCallback } from "react";
import cls from './LoginForm.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "../../model/slice/loginSlice";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import Text, { TextTheme } from "shared/ui/Text/Text";
import i18n from "shared/config/i18n/i18n";

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = memo((props) => {
    const {
        className,
    } = props; 

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState)

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
    );
});

export default LoginForm;