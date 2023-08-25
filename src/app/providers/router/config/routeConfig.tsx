import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticleDetailsPage } from "@/pages/ArticlesDetailsPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import MainPage from "@/pages/Mainpage/ui/MainPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ProfilePage } from "@/pages/ProfilePage"
import { RouteProps } from "react-router-dom";
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { AppRouters, RoutePath } from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRouters.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },

    [AppRouters.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRouters.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_CREATE]: {
        path: `${RoutePath.article_create}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRouters.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },

    [AppRouters.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },

    [AppRouters.NOT_FOUND_PAGE]: {
        path: RoutePath.not_found_page,
        element: <NotFoundPage />
    },
}