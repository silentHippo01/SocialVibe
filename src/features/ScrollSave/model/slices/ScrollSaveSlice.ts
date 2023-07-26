import { action } from '@storybook/addon-actions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { scrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: scrollSaveSchema = {
    scroll: {},
}

export const ScrollSaveSlice = createSlice({
  name: 'login',
  initialState, 
  reducers: {
    setScrollPosition: (state, {payload}: PayloadAction<{path: string; position: number}>) => {
        state.scroll[payload.path] = payload.position;
    }
  }, 
})

export const { actions: ScrollSaveActions } = ScrollSaveSlice;
export const { reducer: ScrollSaveReducer } = ScrollSaveSlice;
