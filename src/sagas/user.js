import { take, fork, all, takeLatest, delay, takeEvery, put, call } from "redux-saga/effects";
import { createRequestSaga } from "../Utils/createRequestSaga";
import { GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE } from "../modules/user";
import { getMyBooksLookUpAPI } from '../api/user';

// export const getMyBooksSaga = createRequestSaga(getMyBooksLookUpAPI, "user/GET_MY_BOOKS_LOOKUP");



export function* getMybooksSaga(action) {
    try {
        const response = yield call(getMyBooksLookUpAPI);


        yield put({
            type: GET_MY_BOOKS_LOOKUP_SUCCESS,
            payload: response.data
        })

    } catch (e) {

        yield put({
            type: GET_MY_BOOKS_LOOKUP_FAILURE,
            payload: e
        })
    }
}
export function* watchGetMyBooksLookupSaga() {
    yield takeEvery(GET_MY_BOOKS_LOOKUP_REQUEST, getMybooksSaga);
}

export default function* userSaga() {
    yield all([fork(watchGetMyBooksLookupSaga)]);
}
