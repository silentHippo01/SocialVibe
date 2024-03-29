import { counterReducer } from '@/entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';
import { CombinedState, configureStore, getDefaultMiddleware, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { ScrollSaveReducer } from '@/features/ScrollSave';
import { rktApi } from '@/shared/api/rtkApi';

export function createReduxStore(
    initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>,
    // navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSave: ScrollSaveReducer,
        [rktApi.reducerPath]: rktApi.reducer,
        // loginForm: loginReducer,
    }

    const reducerManager = createReducerManager(rootReducers);

    const store  = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({ 
            thunk: {
                // extraArgument - нужен, чтобы можно было пользоваться api, navigate и тд внутри thunk-ов
                extraArgument: {
                    api: $api,
                }
            }
        }).concat(rktApi.middleware)
      })

      // @ts-ignore
      store.reducerManager = reducerManager;
    
    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']; 


//      store.replaceReducer