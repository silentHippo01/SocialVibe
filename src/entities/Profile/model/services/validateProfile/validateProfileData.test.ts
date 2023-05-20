import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk.ts/TestAsyncThunk";
import { validateProfileData } from "./validateProfileData";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { ValidateProfileError } from "../../types/profile";

const data = {
    first: 'andrew',
    lastname: 'novikov',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    username: 'slienthippo',
};

describe('validateProfileData', () => {

    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('without first name and lastname', async () => {
        const result = validateProfileData({...data, first:'', lastname:''});
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', async () => {
        const result = validateProfileData({...data, age: undefined});
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('incorrect country', async () => {
        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('incorrect all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY
        ]);
    });
})