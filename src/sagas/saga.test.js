import { expectSaga } from "redux-saga-test-plan";
import { call } from "redux-saga/effects";

import {
    SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_USER_INFO_SUCCESS, SEARCH_ADMIN_USER_INFO_FAILURE,
    SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS, SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE,
    ADMIN_REMOVE_HAVING_BOOK_SUCCESS, ADMIN_REMOVE_HAVING_BOOK_REQUEST
} from '../modules/admin';

import { throwError } from "redux-saga-test-plan/providers";
import { searchUserInfoAPI, searchInHouseBooksAPI, deleteHavingBook, } from '../api/admin'
import { watchSearcUserInfo, watchDeleteHavingBook, watchSearchInHounseBooks, searchUserInfo } from './admin'
import admin from '../modules/admin'


describe('어드민 사내 보유 책 제거 기능', () => {

    it('검색어를 `react`로 검색 하면 검색어와 검색어와 관련된 책들이 initialState에 들어간다', () => {
        const books = [{ title: "reat", bookId: 0 }, { title: "angular", bookId: 1 }, { title: "vue", bookId: 2 }]
        const search = 'react'
        const initalState = { inhouseBooks: [], search: "" };
        const finalState = { ...initalState };
        finalState.inhouseBooks = finalState.inhouseBooks.concat(books);
        finalState.search = search;

        return expectSaga(watchSearchInHounseBooks)
            .withReducer(admin, initalState)
            .provide([[call(searchInHouseBooksAPI, search), { data: books }]])
            .put({ type: SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS, payload: books })
            .dispatch({ type: SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, payload: search })
            .hasFinalState(finalState)
            .silentRun()
    })



    it('id가 0~2인 책 중에서 id가 1인 책은 제거 한 후에 상태를 본다', () => {

        const id = 1;
        const books = [{ title: "reat", bookId: 0 }, { title: "angular", bookId: 1 }, { title: "vue", bookId: 2 }]

        const initalState = { inhouseBooks: [] }
        initalState.inhouseBooks = initalState.inhouseBooks.concat(books)
        const finalState = { ...initalState }
        finalState.inhouseBooks.splice(id, 1) // index 가 id인 data 삭제

        return expectSaga(watchDeleteHavingBook)
            .withReducer(admin, initalState)
            .provide([[call(deleteHavingBook, id), { data: id }]])
            .put({ type: ADMIN_REMOVE_HAVING_BOOK_SUCCESS, payload: id })
            .dispatch({ type: ADMIN_REMOVE_HAVING_BOOK_REQUEST, payload: id })
            .hasFinalState(finalState)
            .silentRun()
    })

})

describe('어드민 유저 리스트 가져오기 기능', () => {

    it('어디민 유저 정보 가져오기 에러 핸들링', () => {
        const error = new Error("잘못된 데이터 형식");

        return expectSaga(searchUserInfo)
            .provide({ call() { throw error } })
            .put.like({ action: { type: SEARCH_ADMIN_USER_INFO_FAILURE } })
            .run()
    })

    it(' `위메프`라는 이름을 가진 유저의 대여리스트 정보를 가져온다', () => {

        const users = [{ name: "react" }, { name: "vue" }, { name: "angular" }]
        const search = "위메프";

        const initialState = { userInfo: [], search: '' }
        const finalState = { ...initialState }
        finalState.userInfo = finalState.userInfo.concat(users)
        finalState.search = search

        return expectSaga(watchSearcUserInfo)
            .withReducer(admin, initialState)
            .provide([[call(searchUserInfoAPI, search), { data: users }]])
            .put({ type: SEARCH_ADMIN_USER_INFO_SUCCESS, payload: users })
            .dispatch({ type: SEARCH_ADMIN_USER_INFO_REQUEST, payload: search })
            .hasFinalState(finalState)
            .silentRun()
    })

})



