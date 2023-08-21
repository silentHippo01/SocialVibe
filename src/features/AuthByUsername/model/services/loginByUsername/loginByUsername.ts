import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "@/app/providers/StoreProvider";
import { ThunkExtraArg } from "@/app/providers/StoreProvider/config/StateSchema";
import { User, userActions } from "@/entities/User";
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage";

interface loginByUsernameProps {
    username: string;
    password: string;
}

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//loginByUserName - создает асинхронный thunk

enum LoginErrors {
    INCORRECT_DATA = '',
    SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<
    User, 
    loginByUsernameProps, 
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {extra, dispatch, rejectWithValue} = thunkAPI;

        try {
            //Вот так запрос выглядит без axios instance
            //const response = await axios.post<User>('http://localhost:8000/login', authData) 
            
            //Вот так запросы выглядит с axios instance
            const response = await extra.api.post<User>('/login', authData);

            if(!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            // extra.navigate('./about');

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

loginByUsername.pending