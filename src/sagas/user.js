import axios from "axios";
import { take, fork, all, takeLatest, delay, takeEvery, put, call } from "redux-saga/effects";
import { createRequestSaga } from "../Utils/createRequestSaga";
import { GET_MY_BOOKS_LOOKUP_REQUEST } from "../modules/user";
import { getMyBooksLookUpAPI } from '../api/user';
export const getMyBooksSaga = createRequestSaga(getMyBooksLookUpAPI, "user/GET_MY_BOOKS_LOOKUP");

export function* getMyBooksLookupSaga() {
    yield takeEvery(GET_MY_BOOKS_LOOKUP_REQUEST, getMyBooksSaga);
}

export default function* userSaga() {
    yield all([fork(getMyBooksLookupSaga)]);
}
