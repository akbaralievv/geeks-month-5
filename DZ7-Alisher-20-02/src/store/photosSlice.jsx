import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk(
    'getPhotos',
    async function(info, {dispatch, rejectWithValue}) {
        try { 
            dispatch(preloaderOn())
            const response = await fetch('https://jsonplaceholder.typicode.com/photos');
            const photos = await response.json();
            dispatch(photosInfo(photos))
        }
        catch (error) {
            // return rejectWithValue(error.message);
        }
        finally {
            dispatch(preloaderOff())
        }
    }
)

const photosSlice = createSlice({
    name: 'photosSlice',
    initialState: {
        photos: [],
        preloader: false
    },
    reducers: {
        photosInfo: (state, action) => {
            state.photos = action.payload;
        },
        preloaderOn: (state) => {
            state.preloader = true;
        },
        preloaderOff: (state) => {
            state.preloader = false;
        }
    }
})

const { photosInfo, preloaderOn, preloaderOff } = photosSlice.actions
export default photosSlice.reducer