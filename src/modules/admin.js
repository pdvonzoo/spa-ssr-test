import { handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_USER_INFO_SUCCESS, SEARCH_ADMIN_USER_INFO_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER_INFO')
export const [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS, SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_EXTERNAL_BOOKS');
export const [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS, SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_INHOUSE_BOOKS');
export const [ADMIN_REMOVE_HAVING_BOOK_REQUEST, ADMIN_REMOVE_HAVING_BOOK_SUCCESS, ADMIN_REMOVE_HAVING_BOOK_FAILURE] = makeActionTypes('admin/ADMIN_REMOVE_HAVING_BOOK');

export const EXTENALS_BOOKS_INIT = 'admin/EXTENALS_BOOKS_INIT';
const initialState = {
    userInfo: null,
    externalBooks: [],
    inhouseBooks: null,
    hasmoreExternalsBooks: false,
    searchText: '',
    offset: 0,
    extenalLoading: false
}
const admin = handleActions(
    {
        [EXTENALS_BOOKS_INIT]: (state, action) => {
            return {
                ...state,
                externalBooks: []
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
            }
        },

        [ADMIN_REMOVE_HAVING_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                inhouseBooks: state.inhouseBooks.filter(book => action.payload !== book.bookId)
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },
        [SEARCH_ADMIN_USER_INFO_REQUEST]: (state, action) => {
            console.log('search admin user request', action)
            return {
                ...state,
                search: action.payload.search
            }
        },
        [SEARCH_ADMIN_USER_INFO_SUCCESS]: (state, action) => {
            return {
                ...state,
                userInfo: action.payload,
                externalBooks: null,
                inhouseBooks: null,
            }
        },
        [SEARCH_ADMIN_USER_INFO_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },

        // SEARCH_NAVER_BOOKS_REQUEST
        [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST', action);
            return {
                ...state,
                extenalLoading: true,
                searchText: action.payload,
                hasmoreExternalsBooks: state.hasmoreExternalsBooks.length ? state.hasmoreExternalsBooks : true,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS', action);
            return {
                ...state,
                extenalLoading: false,
                searchText: state.searchText,
                externalBooks: state.externalBooks.concat(action.payload),
                hasmoreExternalsBooks: action.payload.length !== 0 ? true : false,
                offset: state.offset + 1,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE', action)
            return {
                ...state,

            }
        },


        [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
            }
        },

        [SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                userInfo: null,
                externalBooks: null,
                inhouseBooks: action.payload
            }
        },


        [SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        }
    },
    initialState
)
export default admin;