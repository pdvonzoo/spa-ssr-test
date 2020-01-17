import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_USER_SUCCESS, SEARCH_ADMIN_USER_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER')
export const [SEARCH_ADMIN_NAVER_BOOKS_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_SUCCESS, SEARCH_ADMIN_NAVER_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_NAVER_BOOKS');
export const [SEARCH_ADMIN_HAVING_BOOKS_REQUEST, SEARCH_ADMIN_HAVING_BOOKS_SUCCESS, SEARCH_ADMIN_HAVING_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_HAVING_BOOKS');
export const [ADMIN_REMOVE_HAVING_BOOK_REQUEST, ADMIN_REMOVE_HAVING_BOOK_SUCCESS, ADMIN_REMOVE_HAVING_BOOK_FAILURE] = makeActionTypes('admin/ADMIN_REMOVE_HAVING_BOOK');
const initialState = {
    books: null,
    hasBooks: null,
    havingBooks: [],
}
const admin = handleActions(
    {
        [ADMIN_REMOVE_HAVING_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
            }
        },

        [ADMIN_REMOVE_HAVING_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                havingBooks: state.havingBooks.filter(book => action.payload !== book.bookId)
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },
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
                hasBooks: null,
                havingBooks: null,
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
                hasBooks: action.payload,
                havingBooks: null,
            }
        },
        [SEARCH_ADMIN_NAVER_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },


        [SEARCH_ADMIN_HAVING_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
            }
        },

        [SEARCH_ADMIN_HAVING_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                books: null,
                hasBooks: null,
                havingBooks: action.payload
            }
        },


        [SEARCH_ADMIN_HAVING_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        }
    },
    initialState
)
export default admin;