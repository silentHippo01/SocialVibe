import { counterReducer } from "./model/slice/counterSlice";
import { Counter }  from './ui/Counter';
import { CounterSchema } from "./model/types/counterSchema";

export {
    Counter,
    counterReducer,
}

export type {
    CounterSchema,
}