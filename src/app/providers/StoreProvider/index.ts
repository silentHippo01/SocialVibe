import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import StoreProvider from "./StoreProvider";
import {createReduxStore} from './config/Store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
};