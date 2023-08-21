import { FC, memo } from 'react';
import AppLink, { AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import cls from './SidebarItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemType; //элемент на основании, которого отрисовывается ссылка в сайдбаре
    collapsed: boolean;
}

const SidebarItem: FC<SidebarItemProps> = memo(({ item, collapsed }) => {

    const { t } = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if(item.authOnly && !isAuth){
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >

            <item.Icon className={cls.icon} />
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

export default SidebarItem;