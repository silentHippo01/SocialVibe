import { createSelector } from "@reduxjs/toolkit"
import { getUserAuthData } from "entities/User"
import { SidebarItemType } from "../types/sidebar"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import  AboutIcon  from 'shared/assets/icon/about-20-20.svg';
import  MainIcon  from 'shared/assets/icon/main-20-20.svg';
import ProfileIcon from 'shared/assets/icon/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icon/articlesIcon-20-20.svg';


export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sideBarItemsList: SidebarItemType[] = [
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
        ];

        if(userData){
            sideBarItemsList.push(
                {
                    path: RoutePath.profile + userData?.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticleIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            )
        }; 

        return sideBarItemsList;
    }
)