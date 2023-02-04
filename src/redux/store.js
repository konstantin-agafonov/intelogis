import { configureStore } from '@reduxjs/toolkit';
import shippingMapReducer from './reducers/shippingMap.reducer';
import shippingRequestsTableReducer from './reducers/shippingRequestsTable.reducer';

export const store = configureStore({
    reducer: {
        shippingMap: shippingMapReducer,
        shippingRequestsTable: shippingRequestsTableReducer,
    },
})
