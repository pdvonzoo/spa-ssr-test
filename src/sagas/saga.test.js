import { expectSaga } from "redux-saga-test-plan";
import { watchtestSaga } from './test';
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from '../modules/test';
import { call } from "redux-saga/effects";
import { GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE } from "../modules/user";

import { getMyBooksLookUpAPI } from '../api/user'
import { getMyBooksLookupSaga } from "./user";

import user from '../modules/user'

const initialState = {
    userLookUpBooks: 'mike',
    isLoading: false,
    isLogged: false,
    number: 1000000,
}

const datas = {
    data: 'mike'
}

it("fetches a user", () => {
    return expectSaga(getMyBooksLookupSaga)
        .withReducer(user)
        .provide([[call(getMyBooksLookUpAPI), datas]])
        .put({ type: GET_MY_BOOKS_LOOKUP_SUCCESS, payload: datas.data })
        .dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
        .hasFinalState({ initialState })
        .silentRun();
});
