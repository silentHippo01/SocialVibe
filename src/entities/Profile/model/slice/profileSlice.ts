import { ProfileSchema, Profile } from './../types/profile';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ProfileSchema = {
    readOnly: true,
    isLoading: false,
    error: undefined,
    data: undefined,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    
  },
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
