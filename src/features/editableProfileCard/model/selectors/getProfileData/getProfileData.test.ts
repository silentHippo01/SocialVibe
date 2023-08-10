import { StateSchema } from "app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Currency } from "entities/Currency"
import { Country } from "entities/Country"


describe('getProfileData', () => {
    test('', () => {
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
                data: data,
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    });
    test("should work with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
})


