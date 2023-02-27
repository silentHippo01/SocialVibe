import { FC } from "react";
import cls from './LoginForm.module.scss';
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}

const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        className,
    } = props; 

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
           <h1>Вход</h1>
           <Input 
                type="text" 
                className={classNames(cls.input, {}, [])}
                placeholder={t('Введите username')}
                autoFocus
                />
           <Input 
                type="text" 
                className={classNames(cls.input, {}, [])}
                placeholder={t('Введите пароль')}
                />
           <Button className={classNames(cls.loginBtn)}>
                {t('Войти')}
           </Button>
        </div>
    );
};

export default LoginForm;