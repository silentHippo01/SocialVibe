import AboutPage from "pages/AboutPage/ui/AboutPage"
import { ArticleEditPage } from "pages/ArticleEditPage";
import { ArticleDetailsPage } from "pages/ArticlesDetailsPage";
import { ArticlesPage } from "pages/ArticlesPage";
import MainPage from "pages/Mainpage/ui/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom";

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRouters {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    NOT_FOUND_PAGE = 'not_found_page',
}

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.ABOUT]: '/about',
    [AppRouters.PROFILE]: '/profile/',
    [AppRouters.ARTICLES]: '/articles',
    [AppRouters.ARTICLE_DETAILS]: '/articles/', // + id
    [AppRouters.ARTICLE_CREATE]: '/articles/new',
    [AppRouters.ARTICLE_EDIT]: '/articles/:id/edit',

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
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRouters.ARTICLES]:{
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_DETAILS]:{
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_EDIT]:{
        path:`${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_CREATE]:{
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    
    [AppRouters.NOT_FOUND_PAGE]:{
        path: RoutePath.not_found_page,
        element: <NotFoundPage />
    },
}