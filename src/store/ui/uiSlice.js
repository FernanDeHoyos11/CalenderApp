import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
     name: 'ui',
    initialState: {
        isDataModalOpen: false 
     },
    reducers: {
        onModalOpen: (state, /* action */ ) => {
            state.isDataModalOpen = true;
     },
        onModalClose: (state) => {
            state.isDataModalOpen = false;
        }
}
});

export const { onModalOpen, onModalClose} = uiSlice.actions;