import { fork, all, takeLatest, takeEvery, put, call } from "redux-saga/effects";
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from '../modules/test';
import { testAPI } from "../api/admin";

const datas = {
    data: "mike"
}
const api = {
    getUsers: () => datas
}

export function* testSagaFunc(action) {
    // try {
    console.log("testFunc : ", action)
    const result = yield call(api.getUsers, action.payload);
    console.log('result :', result)
    yield put({ type: TEST_SUCCESS, payload: result.data })
    // } catch (e) {
    //     console.error(e);
    //     yield put({ type: TEST_FAILURE, payload: "실패" })
    // }
}
export function* watchtestSaga() {
    yield takeLatest(TEST_REQUEST, testSagaFunc);
}


export default function* testSaga() {
    yield all([fork(testSagaFunc)]);
}
