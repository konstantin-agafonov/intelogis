import { createSlice } from '@reduxjs/toolkit'

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
    ],
}

export const shippingRequestsTableSlice = createSlice({
    name: 'shippingRequestsTable',
    initialState,
    reducers: {
        /*increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },*/
        /*clearCurrentRoute: (state) => {
            state.currentRoute = {};
        },*/
    },
})

// Action creators are generated for each case reducer function
export const { /*increment, decrement, incrementByAmount*/ clearCurrentRoute } = shippingRequestsTableSlice.actions

export default shippingRequestsTableSlice.reducer
