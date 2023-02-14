import AboutPage from "pages/AboutPage/ui/AboutPage"
import MainPage from "pages/Mainpage/ui/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.NOT_FOUND_PAGE]: '*',

}

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    }, 
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRouters.NOT_FOUND_PAGE]:{
        path: RoutePath.not_found_page,
        element: <NotFoundPage />
    }
}