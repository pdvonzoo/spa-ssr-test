import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { searchBookAPI, searchNaverBooksAPI, searchHavingBooksAPI, deleteHavingBook } from '../api/admin'
import { SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_REQUEST, SEARCH_ADMIN_HAVING_BOOKS_REQUEST, ADMIN_REMOVE_HAVING_BOOK_REQUEST } from "../modules/admin";
import { createRequestSaga } from "../Utils/createRequestSaga";
export const searchBookSaga = createRequestSaga(searchBookAPI, "admin/SEARCH_ADMIN_USER");
export const searchNaverBooksSaga = createRequestSaga(searchNaverBooksAPI, "admin/SEARCH_ADMIN_NAVER_BOOKS");
export const searchHavingBooksSaga = createRequestSaga(searchHavingBooksAPI, 'admin/SEARCH_ADMIN_HAVING_BOOKS')
export const removeHavingBook = createRequestSaga(deleteHavingBook, 'admin/ADMIN_REMOVE_HAVING_BOOK')

function* watchSearchHavingBooksSaga() {
    yield takeEvery(SEARCH_ADMIN_HAVING_BOOKS_REQUEST, searchHavingBooksSaga)
}

function* watchSearcBookSaga() {
    yield takeLatest(SEARCH_ADMIN_USER_REQUEST, searchBookSaga);
}

function* watchSearcNaverBooksSaga() {
    yield takeLatest(SEARCH_ADMIN_NAVER_BOOKS_REQUEST, searchNaverBooksSaga);
}


function* watchDeleteHavingBook() {
    yield takeLatest(ADMIN_REMOVE_HAVING_BOOK_REQUEST, removeHavingBook)
}
export default function* adminSaga() {
    yield all([fork(watchSearcBookSaga), fork(watchSearcNaverBooksSaga), fork(watchSearchHavingBooksSaga), fork(watchDeleteHavingBook)]);
}