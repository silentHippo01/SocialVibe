import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

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

export const loginByUsername = createAsyncThunk<User, loginByUsernameProps>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {

        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password
            }) 

            if(!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
);

loginByUsername.pending