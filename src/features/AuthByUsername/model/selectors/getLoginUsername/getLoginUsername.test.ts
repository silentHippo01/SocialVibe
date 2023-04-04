import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from 'app/providers/StoreProvider';


describe('getLoginUsername', () => {
   test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Andrew'
            }
        }

        expect(getLoginUsername(state as StateSchema)).toEqual('Andrew')
   });

   test('should work wit empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginUsername(state as StateSchema)).toEqual('')
})
})