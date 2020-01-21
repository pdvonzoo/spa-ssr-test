import { expectSaga } from "redux-saga-test-plan";
import { watchtestSaga } from './test';
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from '../modules/test';
import { call } from "redux-saga/effects";
import { GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE } from "../modules/user";

import { getMyBooksLookUpAPI } from '../api/user'
import { getMyBooksLookupSaga } from "./user";

import user from '../modules/user'


const result = {
    data: [
        {
            title: "책1",
            writer: "홍길동",
        },
        {
            title: "책2",
            writer: "홍길동2"
        },

        {
            title: "책3",
            writer: "홍길동3"
        },
    ]
}

const initialState = {
    userLookUpBooks: [],
    isLoading: false,
    isLogged: false,
    number: 1000000,
}
const finalState = {
    userLookUpBooks: result.data,
    isLoading: false,
    isLogged: false,
    number: 1000000,
}

it("초기 상태 체크", () => {
    return expectSaga(getMyBooksLookupSaga)
        .withReducer(user)
        .hasFinalState(initialState)
        .run()
})

it("가져온 책들이 배열로 들어가야한다.", () => {
    return expectSaga(getMyBooksLookupSaga)
        .withReducer(user)
        .provide([[call(getMyBooksLookUpAPI), result]])
        .put({ type: GET_MY_BOOKS_LOOKUP_SUCCESS, payload: result.data })
        .dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
        .hasFinalState(finalState)
        .silentRun();
});

