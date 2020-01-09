import { all, call, takeEvery, takeLatest, delay } from "redux-saga/effects";
import book from "./book";
import user from './user'
export default function* rootSaga() {
    yield all([call(book), call(user)]);
}
