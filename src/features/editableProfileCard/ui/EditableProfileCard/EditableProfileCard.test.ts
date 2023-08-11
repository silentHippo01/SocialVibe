// import { Profile } from 'entities/Profile';
// import { Country } from './../../../../entities/Country/model/types/Country';
// import { Currency } from './../../../../entities/Currency/model/types/Currency';
// import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
// import { profileReducer } from '../../model/slice/profileSlice';
// import userEvent from '@testing-library/user-event';
// import { EditableProfileCard } from './EditableProfileCard';

// const profile: Profile = {
//     id: '1',
//     first: 'admin',
//     lastname: 'admin',
//     age: 465,
//     currency: Currency.USD,
//     country: Country.Kazakhstan,
//     username: 'admin213',
//     city: 'Moscow',
// }

// const options = {
//     initialState: {
//         profile: {
//             readonly: true,
//             data: profile,
//             form: profile,
//         },
//         user: {
//             authData: { id: '1', username: 'admin' },
//         },
//     },
//     asyncReducers: {
//         profile: profileReducer,
//     },
// };

// describe('features/EditableProfileCard', () => {
//     test('Режим redonly должен переключиться', async () => {
//         //@ts-ignore
//         componentRender(<EditableProfileCard id='1'/>, options);
//         //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
//         //@ts-ignore
//         expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
//     });

//     test('При отмене значения должны обнуляться', async () => {
//          //@ts-ignore
//          componentRender(<EditableProfileCard id='1'/>, options);
//          //@ts-ignore
//          await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
//          //@ts-ignore
//          await userEvent.click(screen.getByTestId('ProfileCard.firstname'));
//          //@ts-ignore
//          await userEvent.click(screen.getByTestId('ProfileCard.lastname'));

//          //@ts-ignore
//          await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
//          //@ts-ignore
//          await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');

//          //@ts-ignore
//         expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');
//          //@ts-ignore
//         expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('user');

//          //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

//          //@ts-ignore
//         expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin');
//          //@ts-ignore
//         expect(screen.getByTestId('ProfileCard.lasname')).toHaveValue('admin');
          
//     })

//     test('Должна появиться ошибка', async () => {
//         //@ts-ignore
//         componentRender(<EditableProfileCard id='1'/>, options);
//         //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
//         //@ts-ignore
//         await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

//         //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));
//         //@ts-ignore
//         expect(screen.getByTestId('EditableProfileCardHeader.Error.Paragraph')).toBeInTheDocument()
//     });

//     test('Если нет ошибок валидации, то на сервер должен уйти PUT запрос', async () => {
//         const mockPutReq = jest.spyOn($api, 'put');
//         //@ts-ignore
//         componentRender(<EditableProfileCard id="1" />, options);
//         //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
//         //@ts-ignore
//         await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user');
//         //@ts-ignore
//         await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

//         expect(mockPutReq).toHaveBeenCalled();
//     });
// })