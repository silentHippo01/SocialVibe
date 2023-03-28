import { FC, memo } from 'react';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Sidebar.module.scss';
import { SidebarItemType } from 'widgets/SideBar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';

interface SidebarItemProps{
    item: SidebarItemType; //элемент на основании, которого отрисовывается ссылка в сайдбаре
    collapsed: boolean;
}

const SidebarItem:FC<SidebarItemProps> = memo(({item, collapsed}) => {
    return (
        <AppLink
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
        className={classNames(cls.item, {[cls.collapsed]: collapsed})}
    >
        
        <item.Icon className={cls.icon}/>
        <span className={cls.link}>{item.text}</span>
        </AppLink>
    );
});

export default SidebarItem;