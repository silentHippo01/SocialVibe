import { ProfileSchema } from './../../../../entities/Profile/model/types/profile';
import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;

    //Async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
 }

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key:StateSchemaKey) => void,
}
  
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}