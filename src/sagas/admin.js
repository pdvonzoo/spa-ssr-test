import { fork, all, takeLatest, takeEvery } from "redux-saga/effects";
import { searchUserInfoAPI, searchExternalBooksAPI, searchInHouseBooksAPI, deleteHavingBook } from '../api/admin'
import { SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, ADMIN_REMOVE_HAVING_BOOK_REQUEST } from "../modules/admin";
import { createRequestSaga } from "../Utils/createRequestSaga";
export const searchUserInfo = createRequestSaga(searchUserInfoAPI, "admin/SEARCH_ADMIN_USER_INFO");
export const searchExternalBooks = createRequestSaga(searchExternalBooksAPI, "admin/SEARCH_ADMIN_EXTERNAL_BOOKS");
export const searchInHounseBooks = createRequestSaga(searchInHouseBooksAPI, 'admin/SEARCH_ADMIN_INHOUSE_BOOKS')
export const removeHavingBook = createRequestSaga(deleteHavingBook, 'admin/ADMIN_REMOVE_HAVING_BOOK')

function* watchSearchInHounseBooks() {
    yield takeEvery(SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, searchInHounseBooks)
}

function* watchSearcUserInfo() {
    yield takeLatest(SEARCH_ADMIN_USER_INFO_REQUEST, searchUserInfo);
}

function* watchSearchExternalBooks() {
    yield takeLatest(SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, searchExternalBooks);
}


function* watchDeleteHavingBook() {
    yield takeLatest(ADMIN_REMOVE_HAVING_BOOK_REQUEST, removeHavingBook)
}
export default function* adminSaga() {
    yield all([fork(watchSearcUserInfo), fork(watchSearchExternalBooks), fork(watchSearchInHounseBooks), fork(watchDeleteHavingBook)]);
}