import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_USER_SUCCESS, SEARCH_ADMIN_USER_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER')
export const [SEARCH_ADMIN_NAVER_BOOKS_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_SUCCESS, SEARCH_ADMIN_NAVER_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_NAVER_BOOKS');

const initialState = {
    books: null,
    hasBooks: null,
}
const admin = handleActions(
    {

        [SEARCH_ADMIN_USER_REQUEST]: (state, action) => {
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_USER_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: action.payload,
                hasBooks: null
            }
        },
        [SEARCH_ADMIN_USER_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },

        // SEARCH_NAVER_BOOKS_REQUEST
        [SEARCH_ADMIN_NAVER_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_NAVER_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: null,
                hasBooks: action.payload
            }
        },
        [SEARCH_ADMIN_NAVER_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },
    },
    initialState
)
export default admin;