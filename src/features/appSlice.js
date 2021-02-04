import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: null,
    image: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null
    },
    selectImage: (state, action) => {
      state.image = action.payload
    },
    resetImages: (state) => {
      state.image = null
    }
  },
});

export const {login, logout, selectImage, resetImages } = appSlice.actions;


export const selectUser = state => state.app.user;
export const selectedImage = state => state.app.image; 

export default appSlice.reducer;