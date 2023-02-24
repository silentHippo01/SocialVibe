import { CounterSchema } from './../../types/counterSchema';
import { getCounter } from './../getCounter/getCounter';
// import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { createSelector } from "@reduxjs/toolkit";


export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
