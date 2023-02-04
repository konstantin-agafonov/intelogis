import { configureStore } from '@reduxjs/toolkit';
import shippingMapReducer from './reducers/shippingMap.reducer';
import shippingRequestsTableReducer from './reducers/shippingRequestsTable.reducer';
import {logger} from "redux-logger";

export const store = configureStore({
    reducer: {
        shippingMap: shippingMapReducer,
        shippingRequestsTable: shippingRequestsTableReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger),
})
