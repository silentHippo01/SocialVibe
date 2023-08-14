import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk.ts/TestAsyncThunk";
import { updateProfileData } from "./updateProfileData";
import { Currency } from "entities/Currency/model/types/Currency";
import { Country } from "entities/Country/model/types/Country";
import { ValidateProfileError } from "../../consts/consts";

const data = {
    first: 'andrew',
    lastname: 'novikov',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    username: 'slienthippo',
    id: '1',
};

describe('updateProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
        
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            }
        });

        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR
        ])
    });

    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: {...data, lastname: ''},
            }
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ])
    });
})