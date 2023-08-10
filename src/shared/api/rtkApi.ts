import { USER_LOCALSTORAGE_KEY } from './../const/localStorage';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rktApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ 
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
            if (token) {
                headers.set('Authorization', token);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({})
})