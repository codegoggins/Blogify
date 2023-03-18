import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null,
  loading:false,
  error:false
}

export const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loginStart:(state) => {
        state.loading = true;
    },
    loginSuccess:(state,action) => {
        state.loading = false;
        state.currentUser = action.payload;
    },
    loginFailure:(state) => {
        state.loading = false;
        state.error = true;
    },
    logout:(state) => {
        state.currentUser = null;
        state.loading = false;
        state.error = false;
    },
    signUpStart: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    signUpFailure: (state) => {
        state.loading = false;
        state.error = true;
    }
  },
})

export const { loginStart,loginSuccess,loginFailure,logout,signUpStart,signUpSuccess,signUpFailure} = userSlice.actions

export default userSlice.reducer