import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { searchBookAPI, updateBookAPI, createBookAPI, deleteBookAPI, searchNaverBooksAPI } from '../api/admin'
import { DELETE_BOOK_REQUEST, UPDATE_BOOK_REQUEST, CREATE_BOOK_REQUEST, SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_REQUEST } from "../modules/admin";
import { createRequestSaga } from "../Utils/createRequestSaga";
const baseSaga = "admin"
const searchBookSaga = createRequestSaga(searchBookAPI, baseSaga, "SEARCH_ADMIN_USER");
const updateBookSaga = createRequestSaga(updateBookAPI, baseSaga, "UPDATE_BOOK");
const createBookSaga = createRequestSaga(createBookAPI, baseSaga, "CREATE_BOOK")
const deleteBookSaga = createRequestSaga(deleteBookAPI, baseSaga, "DELETE_BOOK");
const searchNaverBooksSaga = createRequestSaga(searchNaverBooksAPI, baseSaga, "SEARCH_ADMIN_NAVER_BOOKS");

function* watchupdateBookSaga() {
    yield takeLatest(UPDATE_BOOK_REQUEST, updateBookSaga);
}

function* watchCreateBookSaga() {
    yield takeEvery(CREATE_BOOK_REQUEST, createBookSaga);
}

function* watchDeleteBookSaga() {
    yield takeEvery(DELETE_BOOK_REQUEST, deleteBookSaga);
}

function* watchSearcBookSaga() {
    yield takeLatest(SEARCH_ADMIN_USER_REQUEST, searchBookSaga);
}

function* watchSearcNaverBooksSaga() {
    yield takeLatest(SEARCH_ADMIN_NAVER_BOOKS_REQUEST, searchNaverBooksSaga);
}

export default function* adminSaga() {
    yield all([fork(watchupdateBookSaga), fork(watchCreateBookSaga), fork(watchDeleteBookSaga), fork(watchSearcBookSaga), fork(watchSearcNaverBooksSaga)]);
}
