import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { createRequestSaga } from "../Utils/createRequestSaga";
import { SEARCH_BOOK_REQUEST, GET_RECOMMENDED_BOOKS_REQUEST, } from "../modules/books";
import { searchBooksAPI, getCommendedAPI } from '../api/book'
const baseSaga = "books"
const searchBookSaga = createRequestSaga(searchBooksAPI, baseSaga, "SEARCH_BOOK");
const getRecommendedBookSaga = createRequestSaga(getCommendedAPI, baseSaga, "GET_RECOMMENDED_BOOKS")

function* searchBooksSaga() {
    yield takeLatest(SEARCH_BOOK_REQUEST, searchBookSaga);
}

function* getCommendedBooksSaga() {
    yield takeEvery(GET_RECOMMENDED_BOOKS_REQUEST, getRecommendedBookSaga);
}

export default function* userSaga() {
    yield all([fork(searchBooksSaga), fork(getCommendedBooksSaga)]);
}

