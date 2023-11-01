import { createSlice } from '@reduxjs/toolkit';

export const autchSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user: {},
        errorMessage: null
     },
    reducers: {
        login: (state,  {payload}  ) => {
            state.status = 'authenticated'
            state.user = payload,
            state.errorMessage = null
        },
        logout: (state, {payload}) => {
            state.status = 'no-authenticated'
            state.errorMessage = payload
            state.user = {}
        },
        checkingCredentials: (state) =>{
           state.status = 'checking',
           state.user = {},
           state.errorMessage = null
        },
        clearErrorMessage: (state) => {
            state.errorMessage = null
        }

}
});

export const { login, logout, checkingCredentials, clearErrorMessage} = autchSlice.actions;