import { configureStore } from '@reduxjs/toolkit';
import shippingMapReducer from './reducers/shippingMap.reducer';
import shippingRequestsTableReducer from './reducers/shippingRequestsTable.reducer';
import {logger} from "redux-logger";
import createSagaMiddleware from "redux-saga";
import shippingSaga from '../sagas/shippingSaga.saga';

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        shippingMap: shippingMapReducer,
        shippingRequestsTable: shippingRequestsTableReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([logger,sagaMiddleware]),
});

sagaMiddleware.run(shippingSaga);
