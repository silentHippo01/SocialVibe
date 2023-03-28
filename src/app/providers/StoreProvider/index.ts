import type { StateSchema, ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema';
import StoreProvider from "./StoreProvider";
import {createReduxStore} from './config/Store';
import { AppDispatch } from './config/Store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    AppDispatch,
};