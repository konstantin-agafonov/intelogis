import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    requestsData: [
        {
            key: 1,
            from: {
                lat: 59.84660399,
                lng: 30.29496392,
            },
            to: {
                lat: 59.82934196,
                lng: 30.42423701,
            }
        },
        {
            key: 2,
            from: {
                lat: 59.82934196,
                lng: 30.42423701,
            },
            to: {
                lat: 59.82761295,
                lng: 30.41705607,
            }
        },
        {
            key: 3,
            from: {
                lat: 59.83567701,
                lng: 30.38064206,
            },
            to: {
                lat: 59.84660399,
                lng: 30.29496392,
            }
        },
        {
            key: 4,
            from: {
                lat: 59.84660399,
                lng: 30.29496392,
            },
            to: {
                lat: 59.82761295,
                lng: 30.41705607,
            }
        },
        {
            key: 5,
            from: {
                lat: 51.497678,
                lng: -0.063819,
            },
            to: {
                lat: 51.463596,
                lng: -0.058256,
            }
        },
    ],
};

export const shippingRequestsTableSlice = createSlice({
    name: 'shippingRequestsTable',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = shippingRequestsTableSlice.actions;

export default shippingRequestsTableSlice.reducer;
