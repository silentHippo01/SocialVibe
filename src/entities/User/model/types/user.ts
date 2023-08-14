import { UserRole } from "../consts/consts";


export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: UserRole[];
}

//пароля нет, тк его не хранят на фронте 

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}