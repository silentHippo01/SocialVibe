import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "@/entities/Article";
import { ArticleSortField, ArticleType } from "@/entities/Article/model/consts/consts";
import { SortOrder } from "@/shared/types/sort";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    //pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    //filters
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;

    _inited: boolean;
}