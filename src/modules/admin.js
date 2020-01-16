import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [DELETE_BOOK_REQUEST, DELETE_BOOK_SUCCESS, DELETE_BOOK_FAILURE] = makeActionTypes('admin/DELETE_BOOK');
export const [UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE] = makeActionTypes('admin/UPDATE_BOOK');
export const [CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, CREATE_BOOK_FAILURE] = makeActionTypes('admin/CREATE_BOOK');
export const [SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_USER_SUCCESS, SEARCH_ADMIN_USER_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER')
export const [SEARCH_ADMIN_HAVING_BOOK_REQUEST, SEARCH_ADMIN_HAVING_BOOK_SUCCESS, SEARCH_ADMIN_HAVING_BOOK_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_HAVING_BOOK')
export const [SEARCH_ADMIN_NAVER_BOOKS_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_SUCCESS, SEARCH_ADMIN_NAVER_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_NAVER_BOOKS');

const initialState = {
    books: null,
    hasBooks: null,
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
        [SEARCH_ADMIN_USER_REQUEST]: (state, action) => {
            console.log('admin-search-books', action)
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_USER_SUCCESS]: (state, action) => {
            console.log("성공", action);
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
        [SEARCH_ADMIN_HAVING_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_HAVING_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: action.payload,
                hasBooks: action.payload
            }
        },
        [SEARCH_ADMIN_HAVING_BOOK_FAILURE]: (state, action) => {

            return {
                ...state,
                hasBooks: null,
            }
        },

        // SEARCH_NAVER_BOOKS_REQUEST
        [SEARCH_ADMIN_NAVER_BOOKS_REQUEST]: (state, action) => {
            console.log('admin-search-books', action)
            return {
                ...state,
                hasBooks: null,
                books: null
            }
        },
        [SEARCH_ADMIN_NAVER_BOOKS_SUCCESS]: (state, action) => {
            console.log("성공", action);
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