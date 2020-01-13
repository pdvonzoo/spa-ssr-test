import { all, call, takeEvery, takeLatest, delay } from "redux-saga/effects";
import book from "./book";
import user from './user'
import admin from './admin'
export default function* rootSaga() {
    yield all([call(book), call(user), call(admin)]);
}
