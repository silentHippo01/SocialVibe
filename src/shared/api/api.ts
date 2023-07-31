import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import axios from "axios";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    }
})

$api.interceptors.request.use((config) => {
    if(config.headers){
        config.headers.authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    }
    return config;
})

// authorization принимает типы 'string | number | boolean'.
// localStorage выдает 'string | null'
// поэтому задаем доп пустую строку