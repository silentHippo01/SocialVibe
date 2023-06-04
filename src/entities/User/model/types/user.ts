export interface User {
    id: string;
    username: string;
}

//пароля нет, тк его не хранят на фронте 

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}