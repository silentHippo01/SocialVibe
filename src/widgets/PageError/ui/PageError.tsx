import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "@/shared/lib/classNames/classNames";
import cls from './PageError.module.scss';

interface ErrorPageProps{
    className?: string;
}

const PageError: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [])}>
            <p>
                {t('Упс! Что-то пошло не так как планировалось')}
            </p>
            <button onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
        </div>
    );
};

export default PageError;