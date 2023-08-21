import { AddCommentFormSchema } from './../../../../features/addCommentForm/model/types/addCommentForm';
import { LoginSchema } from '@/features/AuthByUsername/model/types/LoginSchema';
import { CounterSchema } from "@/entities/Counter";
import { UserSchema } from "@/entities/User";
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsCommentsSchema, ArticleDetailsPageSchema, articleDetailsPageRecommendationsSchema } from '@/pages/ArticlesDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlesPage';
import { scrollSaveSchema } from '@/features/ScrollSave';
import { rktApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/editableProfileCard/model/types/profileSchema';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSave: scrollSaveSchema;
    [rktApi.reducerPath]: ReturnType<typeof rktApi.reducer>

    //Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema; //группирует два редьюсера
 }

export type StateSchemaKey = keyof StateSchema;
export type MountedReducer = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key:StateSchemaKey) => void,
    //true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducer,
}
  
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}


export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

//<T> - тип ошибки
export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}