import  AboutIcon  from 'shared/assets/icon/about-20-20.svg';
import  MainIcon  from 'shared/assets/icon/main-20-20.svg';
import ProfileIcon from 'shared/assets/icon/profile-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SideBar } from 'widgets/SideBar';
export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Главная',   
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'О сайте',
        
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
    },
]