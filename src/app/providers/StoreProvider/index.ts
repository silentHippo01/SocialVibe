import type { StateSchema, ThunkConfig, StateSchemaKey, ReduxStoreWithManager } from '@/app/providers/StoreProvider/config/StateSchema';
import StoreProvider from "./ui/StoreProvider";
import { createReduxStore } from './config/Store';
import { AppDispatch } from './config/Store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ThunkConfig,
    StateSchemaKey,
    ReduxStoreWithManager,
};

export type {
    AppDispatch
}

