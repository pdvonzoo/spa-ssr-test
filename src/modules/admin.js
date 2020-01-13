import { createAction, handleActions } from "redux-actions";

export const DELETE_BOOK_SUCCESS = 'admin/DELETE_BOOK_SUCCESS';
export const DELETE_BOOK_FAILURE = 'admin/DELETE_BOOK_FAILURE';
export const DELETE_BOOK_REQUEST = 'admin/DELETE_BOOK_REQUEST';

export const UPDATE_BOOK_REQUEST = 'admin/UPDATE_BOOK_REQUEST'
export const UPDATE_BOOK_FAILURE = 'admin/UPDATE_BOOK_FAILURE'
export const UPDATE_BOOK_SUCCESS = 'admin/UPDATE_BOOK_SUCCESS'

export const CREATE_BOOK_REQUEST = 'admin/CREATE_BOOK_REQUEST'
export const CREATE_BOOK_SUCCESS = 'admin/CREATE_BOOK_SUCCESS'
export const CREATE_BOOK_FAILURE = 'admin/CREATE_BOOK_FAILURE'

export const SEARCH_A_BOOK_REQUEST = 'admin/SEARCH_A_BOOK_REQUEST'
export const SEARCH_A_BOOK_SUCCESS = 'admin/SEARCH_A_BOOK_SUCCESS'
export const SEARCH_A_BOOK_FAILURE = 'admin/SEARCH_A_BOOK_FAILURE'

const initialState = {
    books: null,
    hasBooks: null
}
const admin = handleActions(
    {

        [DELETE_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,

            }
        },
        [DELETE_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
            }
        },
        [DELETE_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },



        [UPDATE_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,

            }
        },
        [UPDATE_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,

            }
        },
        [UPDATE_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },



        [CREATE_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,

            }
        },
        [CREATE_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,

            }
        },
        [CREATE_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },


        // SEARCH_A_BOOK_REQUEST
        [SEARCH_A_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_A_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: action.data,
                hasBooks: action.data
            }
        },
        [SEARCH_A_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },


    },
    initialState
)
export default admin;