import axios from "axios";
import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import {
    GET_MY_BOOKS_LOOKUP_REQUEST,
    GET_MY_BOOKS_LOOKUP_SUCCESS,
    GET_MY_BOOKS_LOOKUP_FAILURE
} from "../modules/user";

const baseURI = 'http://localhost:5000'

//------------------------------------------------------------------------------------------------------------------------

function getMyBooksLookUpAPI() {
    console.log('여기왔어욘')
    return axios.get(`${baseURI}/historylookup`);
}

function* getMyBooksLookUp() {
    console.log("getMyBooksLookUp")
    try {
        const result = yield call(getMyBooksLookUpAPI);
        console.log(result)
        yield put({
            type: GET_MY_BOOKS_LOOKUP_SUCCESS,
            data: result.data
        })
    } catch (e) {
        yield put({
            type: GET_MY_BOOKS_LOOKUP_FAILURE,
            error: e
        })
    }
}
function* getMyBooksLookupSaga() {
    console.log('Hi')
    yield takeEvery(GET_MY_BOOKS_LOOKUP_REQUEST, getMyBooksLookUp);
}

//------------------------------------------------------------------------------------------------------------------------

export default function* userSaga() {
    yield all([fork(getMyBooksLookupSaga)]);
}
