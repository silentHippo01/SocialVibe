import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
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
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readOnly = action.payload;
    },
    cancelEdit: (state) => {
      state.readOnly = true;
      state.validateErrors = undefined;
      state.form = state.data;
    },
    saveChange: (state, action: PayloadAction<Profile>) => {
      state.readOnly = true;
      state.form = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.data,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })

      .addCase(fetchProfileData.fulfilled, (
        state, 
        action:PayloadAction<Profile>
      ) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })
      
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateProfileData.pending, (state) => {
        state.validateErrors = undefined;
        state.isLoading = true;
      })

      .addCase(updateProfileData.fulfilled, (state, action:PayloadAction<Profile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readOnly = true;
        state.validateErrors = undefined;
      })
      
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validateErrors = action.payload;
      })
  }
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
