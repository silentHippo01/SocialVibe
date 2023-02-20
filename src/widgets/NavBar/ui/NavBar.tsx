import { FC } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from "./NavBar.module.scss";
import { classNames } from 'shared/lib/classNames/classNames';

interface NavBarProps {
    className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.links}>
                /
            </div>
        </div>
    );
};
