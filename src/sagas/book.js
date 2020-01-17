import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { createRequestSaga } from "../Utils/createRequestSaga";
import { SEARCH_BOOK_REQUEST, GET_RECOMMENDED_BOOKS_REQUEST } from "../modules/books";
import { searchBooksAPI, getCommendedAPI } from '../api/book'
export const searchBookSaga = createRequestSaga(searchBooksAPI, "books/SEARCH_BOOK");
export const getRecommendedBookSaga = createRequestSaga(getCommendedAPI, "books/GET_RECOMMENDED_BOOKS")




function* searchBooksSaga() {
    yield takeLatest(SEARCH_BOOK_REQUEST, searchBookSaga);
}

export function* getCommendedBooksSaga() {
    yield takeEvery(GET_RECOMMENDED_BOOKS_REQUEST, getRecommendedBookSaga);
}

export default function* userSaga() {
    yield all([fork(searchBooksSaga), fork(getCommendedBooksSaga)]);
}

