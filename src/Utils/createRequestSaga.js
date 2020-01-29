import { call, put } from 'redux-saga/effects'

const createRequestSaga = (api, type) => {
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    return function* (action) {
        try {
            console.log('action ~~: ', action)
            const response = yield call(api, action.payload);
            console.log('response: ', response)
            yield put({
                type: SUCCESS,
                payload: response.data,
            })
        } catch (e) {
            yield put({
                type: FAILURE,
                payload: e,
                error: e
            })
        }
    }
}

export { createRequestSaga }