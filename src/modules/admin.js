import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE] = makeActionTypes('admin/DELETE_BOOK');
export const [UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE] = makeActionTypes('admin/UPDATE_BOOK');
export const [CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAILURE] = makeActionTypes('admin/CREATE_BOOK');
export const [SEARCH_A_BOOK_REQUEST, SEARCH_A_BOOK_SUCCESS, SEARCH_A_BOOK_FAILURE] = makeActionTypes('admin/SEARCH_A_BOOK')

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
                books: action.payload,
                hasBooks: action.payload
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