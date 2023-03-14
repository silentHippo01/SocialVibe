import { counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { StateSchema } from './StateSchema';
import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
    initialState?: StateSchema, 
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        // loginForm: loginReducer,
    }

    const reducerManager = createReducerManager(rootReducers);

    const store  = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
      })

      store.replaceReducer

      // @ts-ignore
      store.reducerManager = reducerManager;
    
    return store;
}
