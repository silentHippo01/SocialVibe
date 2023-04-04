import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import axios from "axios";

export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    }
})

// authorization принимает типы 'string | number | boolean'.
// localStorage выдает 'string | null'
// поэтому задаем доп пустую строку