
import { TestAsyncThunk } from './../../../../../shared/lib/tests/TestAsyncThunk.ts/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

jest.mock('axios');

const data = {
    first: 'andrew',
    lastname: 'novikov',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    username: 'slienthippo',
};

describe('fetchProfileData', () => {

    test('success fetch', async () => {

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
        
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(result.meta.requestStatus).toBe('rejected')
    });

})