import { ValidateProfileError } from './../types/profile';
import { Currency } from "entities/Currency";
import { ProfileSchema } from "../types/profile";
import { profileActions, profileReducer } from "./profileSlice";
import { Country } from "entities/Country";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";

const data = {
    first: 'andrew',
    lastname: 'novikov',
    age: 21,
    currency: Currency.USD,
    country: Country.Russia,
    username: 'slienthippo',
};

describe('profileSlice.test', () => {
    test('test setReadOnly', () => {
        const state: DeepPartial<ProfileSchema> = { readOnly: false};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({readOnly: true});
    });

    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' }};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' }};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123'
            }),
        )).toEqual({
            form: { username: '123' },
        });
    });

    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' }};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123'
            }),
        )).toEqual({
            form: { username: '123' },
        });
    });

    test('test update profile sevice pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile sevice fullfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data: data,
        });
    });
});