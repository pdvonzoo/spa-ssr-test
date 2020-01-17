import { expectSaga } from "redux-saga-test-plan";
import { call, put } from "redux-saga/effects";
import { getCommendedBooksSaga, getRecommendedBookSaga } from '../sagas/book'

it("get recommended books initialize", () => {

    const obj = {
        data: "mike"
    };
    const mockAPI = {
        getBooks: () => obj.data
    }


    return expectSaga(getRecommendedBookSaga)
        .provide([[call(mockAPI.getBooks), obj]])
        .put({ type: "GET_RECOMMENDED_BOOKS_SUCCESS", payload: obj.data })
        .dispatch({ type: "GET_RECOMMENDED_BOOKS_REQUEST" })
        .run()
})


