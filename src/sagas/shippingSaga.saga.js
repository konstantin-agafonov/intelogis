import { call, takeEvery, put } from "redux-saga/effects";
import { shippingSagaActions } from "./shippingSaga.actions";
import fetchRouteFromApi from "../http/fetchRouteFromApi";
import { setCurrentRoute } from "../redux/reducers/shippingMap.reducer";

export function* fetchRouteSaga(action) {
    try {
        let result = yield call(() =>
            fetchRouteFromApi(action.payload)
        );
        yield put(setCurrentRoute(result.data));
    } catch (e) {
        yield put({ type: "ROUTE_FETCH_FAILED" });
    }
}

export default function* shippingSaga() {
    yield takeEvery(shippingSagaActions.FETCH_ROUTE_SAGA, fetchRouteSaga);
}
