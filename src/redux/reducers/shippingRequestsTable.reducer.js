import { createSlice } from '@reduxjs/toolkit';
import requestsData from './shippingRequestsData';

const initialState = {
    requestsData
};

export const shippingRequestsTableSlice = createSlice({
    name: 'shippingRequestsTable',
    initialState,
});

export default shippingRequestsTableSlice.reducer;
