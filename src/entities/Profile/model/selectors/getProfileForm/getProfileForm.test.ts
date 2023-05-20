import { StateSchema } from "app/providers/StoreProvider"
import { getProfileForm } from "./getProfileForm";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";


describe('getProfileForm', () => {
    test('should return error', () => {
        const data = {
            first: 'andrew',
            lastname: 'novikov',
            age: 21,
            currency: Currency.USD,
            country: Country.Russia,
            username: 'admin',
            city: 'Moscow',
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }

        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
})