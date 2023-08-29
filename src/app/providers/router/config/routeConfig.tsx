import { AboutPage } from "@/pages/AboutPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticleDetailsPage } from "@/pages/ArticlesDetailsPage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import MainPage from "@/pages/Mainpage/ui/MainPage"
import { NotFoundPage } from "@/pages/NotFoundPage"
import { ProfilePage } from "@/pages/ProfilePage"
import { UserRole } from '@/entities/User'
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import {
    AppRouters,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile
} from "@/shared/const/router";
import { AppRoutesProps } from "@/shared/types/router";

export const routeConfig: Record<AppRouters, AppRoutesProps> = {
    [AppRouters.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />
    },
    [AppRouters.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />
    },
    [AppRouters.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },

    [AppRouters.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRouters.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },

    [AppRouters.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },

    [AppRouters.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },

    [AppRouters.NOT_FOUND_PAGE]: {
        path: "*",
        element: <NotFoundPage />
    },
}