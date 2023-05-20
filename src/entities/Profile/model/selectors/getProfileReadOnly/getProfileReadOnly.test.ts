import { StateSchema } from "app/providers/StoreProvider"
import { getProfileReadOnly } from "./getProfileReadOnly";


describe('getProfileReadOnly', () => {
    test('should return readOnly', () => {
       
        const state: DeepPartial<StateSchema> = {
            profile: {
                readOnly: true
            }
        }

        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    })
})