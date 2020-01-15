import { call, put } from 'redux-saga/effects'

const createRequestSaga = (api, prefix, type) => {
    const SUCCESS = `${prefix}/${type}_SUCCESS`
    const FAILURE = `${prefix}/${type}_FAILURE`
    console.log("test ", type)
    return function* (action) {
        console.log("action : ", action)
        try {
            const response = yield call(api, action.payload);
            console.log('responses : ', response);
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