import { FC, useCallback, useState } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from "./NavBar.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/ui/Modal/Modal';
import { LoginModal } from 'features/AuthByUsername';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {

    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button 
                theme={ButtonTheme.CLEAR_INVERTED} 
                className={cls.links}
                onClick={onShowModal}
            >
                {t('Войти')}
            </Button>

            <LoginModal 
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
