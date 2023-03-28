import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';


export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean; // на случай если не нужно будет удалять редьюсер после размонтирования компонента
    children: ReactNode;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        reducers,
        removeAfterUnmount,
        children,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer); // при монтировании добавляем
            dispatch({ type: `@INIT ${name} reducer` });
        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name); // при размонтировании отключаем
                    dispatch({ type: `@DESTROY ${name} reducer` });
                })
            }
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};
