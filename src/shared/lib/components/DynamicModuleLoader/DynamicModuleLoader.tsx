import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider';
import { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean; // на случай если не нужно будет удалять редьюсер после размонтирования компонента
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        reducers,
        removeAfterUnmount = true,
        children,
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        //Object.entries когда достает ключи у объектов по умолчании принимает их строковыми 
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer); // при монтировании добавляем
                dispatch({ type: `@INIT ${name} reducer` });
            }

        })

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey); // при размонтировании отключаем
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

