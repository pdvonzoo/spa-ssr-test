import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { searchBookAPI, updateBookAPI, createBookAPI, deleteBookAPI } from '../api/admin'
import { DELETE_BOOK_REQUEST, UPDATE_BOOK_REQUEST, CREATE_BOOK_REQUEST, SEARCH_A_BOOK_REQUEST } from "../modules/admin";
import { createRequestSaga } from "../Utils/createRequestSaga";
const baseSaga = "admin"
const searchBookSaga = createRequestSaga(searchBookAPI, baseSaga, "SEARCH_A_BOOK");
const updateBookSaga = createRequestSaga(updateBookAPI, baseSaga, "UPDATE_BOOK");
const createBookSaga = createRequestSaga(createBookAPI, baseSaga, "CREATE_BOOK")
const deleteBookSaga = createRequestSaga(deleteBookAPI, baseSaga, "DELETE_BOOK");

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
    yield takeLatest(SEARCH_A_BOOK_REQUEST, searchBookSaga);
}

export default function* adminSaga() {
    yield all([fork(watchupdateBookSaga), fork(watchCreateBookSaga), fork(watchDeleteBookSaga), fork(watchSearcBookSaga)]);
}
