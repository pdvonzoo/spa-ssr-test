import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE] = makeActionTypes('admin/DELETE_BOOK');
export const [UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE] = makeActionTypes('admin/UPDATE_BOOK');
export const [CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAILURE] = makeActionTypes('admin/CREATE_BOOK');
export const [SEARCH_ADMIN_NEWBOOK_REQUEST, SEARCH_ADMIN_NEWBOOK_SUCCESS, SEARCH_ADMIN_NEWBOOK_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_NEWBOOK')
export const [SEARCH_ADMIN_HAVING_BOOK_REQUEST, SEARCH_ADMIN_HAVING_BOOK_SUCCESS, SEARCH_ADMIN_HAVING_BOOK_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_HAVING_BOOK')

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
        [SEARCH_ADMIN_NEWBOOK_REQUEST]: (state, action) => {
            console.log('admin-search-books', action)
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_NEWBOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: action.payload,
                hasBooks: null
            }
        },
        [SEARCH_ADMIN_NEWBOOK_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },
        [SEARCH_ADMIN_HAVING_BOOK_REQUEST]: (state, action) => {
            console.log('admin-newbook', action)
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_HAVING_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: null,
                hasBooks: action.payload
            }
        },
        [SEARCH_ADMIN_HAVING_BOOK_FAILURE]: (state, action) => {

            return {
                ...state,
                hasBooks: null,
            }
        },


    },
    initialState
)
export default admin;