import AboutPage from "pages/AboutPage/ui/AboutPage"
import MainPage from "pages/Mainpage/ui/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom";

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',

    NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile',

    [AppRouters.NOT_FOUND_PAGE]: '*',
}

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    }, 
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },

    [AppRouters.PROFILE]:{
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },

    
    [AppRouters.NOT_FOUND_PAGE]:{
        path: RoutePath.not_found_page,
        element: <NotFoundPage />
    },
}