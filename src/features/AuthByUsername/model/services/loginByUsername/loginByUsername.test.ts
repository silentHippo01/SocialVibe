import { TestAsyncThunk } from './../../../../../shared/lib/tests/TestAsyncThunk.ts/TestAsyncThunk';
import { userActions } from 'entities/User';
import { StateSchema } from './../../../../../app/providers/StoreProvider/config/StateSchema';
import { loginByUsername } from './loginByUsername';
import axios from 'axios';
import { Dispatch } from '@reduxjs/toolkit';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername', () => {

    //объявляем типы
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;

    //этот колбек будет отрабатывать перед каждым тестом
    // beforeEach(() => {
    //     dispatch = jest.fn(); // присваиваем функции 
    //     getState = jest.fn();
    // })

    // beforeEach(() => {
    //     dispatch = jest.fn()
    // });

    // test('success login', async() => {
    //     const userValue = { username: '123', id: '1' };
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue })); //замокали ответ от сервера
    //     const action = loginByUsername({username: '123', password: '123'}); // мокаем action 
    //     const result = await action(dispatch, getState, undefined);
        
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('fulfilled');
    //     expect(result.payload).toBe(userValue);
    // });

    // test('error login', async() => {
    //     mockedAxios.post.mockReturnValue(Promise.resolve({ data: 403 }));
    //     const action = loginByUsername({username: '123', password: '123'});
    //     const result = await action(dispatch, getState, undefined);
        
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe('rejected');
    //     expect(result.payload).toBe('error');
    // })

    test('success login', async () => {
        const userValue = { username: '123', id: '1' };

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username: '123', password: '123' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });

})