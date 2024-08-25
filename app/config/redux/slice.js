import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    userPofile: null,
    accessToken: null,
};


export const slice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userPofile = action.payload;
        },

        setAccessToken: (state, action) =>{
            state.accessToken = action.payload;
        },
    },
});

export const { setUserProfile, setAccessToken } = slice.actions;

//Selectors
export const selectUserProfile = (state) => state.nav.userPofile;
export const selectAccessToken = (state) => state.nav.accessToken;

export default slice.reducer;