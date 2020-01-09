import axios from "axios";
import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";

import {
    SEARCH_BOOK_REQUEST,
    SEARCH_BOOK_SUCCESS,
    SEARCH_BOOK_FAILURE,
    GET_RECOMMENDED_BOOKS_REQUEST,
    GET_RECOMMENDED_BOOKS_SUCCESS,
    GET_RECOMMENDED_BOOKS_FAILURE
} from "../modules/books";
import { dataLimitLength } from '../modules/books'


const baseURI = 'http://localhost:5000'

//검색 결과 책들 가져오기
function searchBooksAPI(data, limit = dataLimitLength) {
    return axios.get(`${baseURI}/post?search=${data.search}&offset=${data.offset}&limit=${limit}`)
}

function* searchBooks(action) {
    try {

        const result = yield call(searchBooksAPI, action.data);
        yield put({
            type: SEARCH_BOOK_SUCCESS,
            data: result.data,
            search: action.data.search
        })
    } catch (e) {
        yield put({
            type: SEARCH_BOOK_FAILURE,
            error: e
        })
    }
}
function* searchBooksSaga() {
    yield takeLatest(SEARCH_BOOK_REQUEST, searchBooks);
}

//------------------------------------------------------------------------------------------------------------------------

//추천 도서 API
function getCommendedAPI() {
    return axios.get(`${baseURI}/getCommendedBooks`);
}

function* getCommended() {
    try {
        const result = yield call(getCommendedAPI);
        yield put({
            type: GET_RECOMMENDED_BOOKS_SUCCESS,
            data: result.data
        })
    } catch (e) {
        yield put({
            type: GET_RECOMMENDED_BOOKS_FAILURE,
            error: e
        })
    }
}

function* getCommendedBooksSaga() {
    yield takeEvery(GET_RECOMMENDED_BOOKS_REQUEST, getCommended);
}

//------------------------------------------------------------------------------------------------------------------------
export default function* userSaga() {
    yield all([fork(searchBooksSaga), fork(getCommendedBooksSaga)]);
}
