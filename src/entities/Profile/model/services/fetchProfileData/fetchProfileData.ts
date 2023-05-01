import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

//дженерики createAsyncThunk: 1 - то что возвращаем, 2 - то что принимаем 
//fetchProfileData - создает асинхронный thunk

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');
            
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
);

fetchProfileData.pending