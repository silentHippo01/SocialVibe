import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from 'app/providers/StoreProvider';


describe('getLoginPassword', () => {
   test('should return 123123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123123'
            }
        }

        expect(getLoginPassword(state as StateSchema)).toEqual('123123')
   });

   test('should work wit empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginPassword(state as StateSchema)).toEqual('')
})
})