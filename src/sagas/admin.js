import axios from "axios";
import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import {
    DELETE_BOOK_SUCCESS,
    DELETE_BOOK_FAILURE,
    DELETE_BOOK_REQUEST,

    UPDATE_BOOK_REQUEST,
    UPDATE_BOOK_FAILURE,
    UPDATE_BOOK_SUCCESS,

    CREATE_BOOK_REQUEST,
    CREATE_BOOK_SUCCESS,
    CREATE_BOOK_FAILURE,

    SEARCH_A_BOOK_REQUEST,
    SEARCH_A_BOOK_SUCCESS,
    SEARCH_A_BOOK_FAILURE,

} from "../modules/admin";
const baseURI = 'http://localhost:5000'


function searchBookAPI() {
    return axios.get(`${baseURI}/admin/search`)
}

function* searchAdminBook() {
    try {

        const result = yield call(searchBookAPI);
        yield put({
            type: SEARCH_A_BOOK_SUCCESS,
            data: result.data,
        })
    } catch (e) {
        yield put({
            type: SEARCH_A_BOOK_FAILURE,
            error: e
        })
    }
}

function* searchAdminSaga() {
    yield takeLatest(SEARCH_A_BOOK_REQUEST, searchAdminBook);
}



function updateBookAPI(actionData) {
    console.log(actionData)
    return axios.post(`${baseURI}/admin/update`, { actionData })
}

function* updateBook(action) {
    console.log('update 북 action :', action)
    try {

        const result = yield call(updateBookAPI, action.data);
        console.log('update result ~~', result)
        yield put({
            type: UPDATE_BOOK_SUCCESS,

        })
    } catch (e) {
        yield put({
            type: UPDATE_BOOK_FAILURE,
            error: e
        })
    }
}

function* updateBookSaga() {
    yield takeLatest(UPDATE_BOOK_REQUEST, updateBook);
}

function createBookAPI(actionData) {
    console.log("호출 !")
    return axios.post(`${baseURI}/admin/create`, { actionData });
}

function* createBook(action) {
    try {
        console.log(action);
        const result = yield call(createBookAPI, action.data);
        console.log(result)
        yield put({
            type: CREATE_BOOK_SUCCESS,
            data: result.data
        })
    } catch (e) {
        yield put({
            type: CREATE_BOOK_FAILURE,
            error: e
        })
    }
}

function* createBookSaga() {
    yield takeEvery(CREATE_BOOK_REQUEST, createBook);
}

function deleteBookAPI() {
    return axios.delete(`${baseURI}/admin/delete`);
}

function* deleteBook() {
    try {
        const result = yield call(deleteBookAPI);
        yield put({
            type: DELETE_BOOK_SUCCESS,
            data: result.data
        })
    } catch (e) {
        yield put({
            type: DELETE_BOOK_FAILURE,
            error: e
        })
    }
}


function* deleteBookSaga() {
    yield takeEvery(DELETE_BOOK_REQUEST, deleteBook);
}


export default function* adminSaga() {
    yield all([fork(updateBookSaga), fork(createBookSaga), fork(deleteBookSaga), fork(searchAdminSaga)]);
}
