import { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { CounterSchema } from "entities/Counter";
import { UserSchema } from "entities/User";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema;
 }