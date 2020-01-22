import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";
import { GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE } from "../modules/user";
import { SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_USER_INFO_SUCCESS, SEARCH_ADMIN_USER_INFO_FAILURE } from '../modules/admin';
import { throwError } from "redux-saga-test-plan/providers";
import { getMyBooksLookUpAPI } from '../api/user'
import { searchUserInfoAPI } from '../api/admin'
import { getMybooksSaga, watchGetMyBooksLookupSaga } from "./user";
import { watchSearcUserInfo } from './admin'

import user from '../modules/user'
import admin from '../modules/admin'

const result = {
    data: [
        {
            title: "책1",
            writer: "홍길동",
        },
        {
            title: "책2",
            writer: "홍길동2"
        }
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


describe("추천 책 가져오기 테스트", () => {

    it("초기 상태 체크", () => {
        return expectSaga(watchGetMyBooksLookupSaga)
            .withReducer(user)
            .hasFinalState(initialState)
            .run()
    })

    it("추천 책 가져오기.", () => {
        return expectSaga(watchGetMyBooksLookupSaga)
            .withReducer(user)
            .provide([[call(getMyBooksLookUpAPI), result]])
            .put({ type: GET_MY_BOOKS_LOOKUP_SUCCESS, payload: result.data })
            .dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
            .hasFinalState(finalState)
            .silentRun();
    });

    it('가져오는 api 오류', () => {
        const error = new Error('error');
        return expectSaga(getMybooksSaga)
            .provide([[call(getMyBooksLookUpAPI), throwError(error)]])
            .put({ type: GET_MY_BOOKS_LOOKUP_FAILURE, payload: error })
            .run();
    })
})

const adminResult = {
    data: [
        {
            user: "리액트는즐거워",
            email: "react@react.com"
        },
        {
            user: "Vue는즐거워",
            email: "VueTest@naver.com"
        }
    ]
}
describe('어드민', () => {
    it('어드민 초기 상태 check', () => {
        return expectSaga(watchSearcUserInfo)
            .withReducer(admin)
            .provide([[call(searchUserInfoAPI, "즐거워"), adminResult]])
            .put({ type: SEARCH_ADMIN_USER_INFO_SUCCESS, payload: adminResult.data })
            .dispatch({ type: SEARCH_ADMIN_USER_INFO_REQUEST, payload: "즐거워" })
            .run()
    })
})