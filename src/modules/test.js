import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE] = makeActionTypes('test/TEST');

const initialState = {
    isLoading: false,
    data: null
}


const test = handleActions(
    {

        [TEST_REQUEST]: (state) => {
            console.log('test request action :', action)
            return {
                ...state,
                isLoading: true
            }
        },

        [TEST_SUCCESS]: (state, action) => {
            console.log('test success action :', action)
            return {
                ...state,
                dada: action.data,
                isLoading: false
            }
        },

        [TEST_FAILURE]: (state, action) => {
            return {
                ...state,
                isLoading: false

            }
        },

    },
    initialState
)
export default test;