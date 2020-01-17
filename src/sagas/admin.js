import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { searchBookAPI, searchNaverBooksAPI } from '../api/admin'
import { SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_REQUEST } from "../modules/admin";
import { createRequestSaga } from "../Utils/createRequestSaga";
const baseSaga = "admin"
const searchBookSaga = createRequestSaga(searchBookAPI, baseSaga, "SEARCH_ADMIN_USER");
const searchNaverBooksSaga = createRequestSaga(searchNaverBooksAPI, baseSaga, "SEARCH_ADMIN_NAVER_BOOKS");


function* watchSearcBookSaga() {
    yield takeLatest(SEARCH_ADMIN_USER_REQUEST, searchBookSaga);
}

function* watchSearcNaverBooksSaga() {
    yield takeLatest(SEARCH_ADMIN_NAVER_BOOKS_REQUEST, searchNaverBooksSaga);
}

export default function* adminSaga() {
    yield all([fork(watchSearcBookSaga), fork(watchSearcNaverBooksSaga)]);
}