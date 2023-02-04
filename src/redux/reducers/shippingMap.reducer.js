import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentRequest: {
        key: 0,
        from: {
            lat: 0,
            lng: 0,
        },
        to: {
            lat: 0,
            lng: 0,
        },
    },
    currentRoute: '',
};

export const shippingMapSlice = createSlice({
    name: 'shippingMap',
    initialState,
    reducers: {
        clearCurrentRequest: (state) => {
            state.currentRequest = {};
        },
        setCurrentRequest: (state,action) => {
            state.currentRequest = action.payload;
        },
        setCurrentRoute: (state,action) => {
            state.currentRoute = action.payload.routes[0].geometry.coordinates.map(coordinate=>[coordinate[1],coordinate[0]]);
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCurrentRequest, clearCurrentRequest, setCurrentRoute } = shippingMapSlice.actions;

export default shippingMapSlice.reducer;
