import axios from "axios";
import { take, fork, all, takeLatest, delay, takeEvery, put, call } from "redux-saga/effects";

import {
    GET_MY_BOOKS_LOOKUP_REQUEST,
    GET_MY_BOOKS_LOOKUP_SUCCESS,
    GET_MY_BOOKS_LOOKUP_FAILURE,

} from "../modules/user";

const baseURI = 'http://localhost:5000'

function getMyBooksLookUpAPI() {
    return axios.get(`${baseURI}/historylookup`);
}

function* getMyBooksLookUp() {
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
    yield takeEvery(GET_MY_BOOKS_LOOKUP_REQUEST, getMyBooksLookUp);
}

// export function* testcode() {
//     yield delay(2000);
//     yield put({ type: "TEST_INCREMENT" })
// }
// export function* testSaga() {
//     yield take("TEST_BOOKS", testcode)
// }


// export function* fetchUsersSaga(api) {
//     const users = yield call(api.getUsers);
//     yield put({ type: "FETCH_USERS_SUCCESS", payload: users });
// }


export default function* userSaga() {
    yield all([fork(getMyBooksLookupSaga)]);
}
