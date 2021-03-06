import { handleActions, createAction } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_USER_INFO_SUCCESS, SEARCH_ADMIN_USER_INFO_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER_INFO')
export const [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS, SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_EXTERNAL_BOOKS');
export const [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS, SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_INHOUSE_BOOKS');
export const [ADMIN_REMOVE_HAVING_BOOK_REQUEST, ADMIN_REMOVE_HAVING_BOOK_SUCCESS, ADMIN_REMOVE_HAVING_BOOK_FAILURE] = makeActionTypes('admin/ADMIN_REMOVE_HAVING_BOOK');
export const ADMIN_USER_RETURNB_BOOK = 'admin/ADMIN_USER_RETURNB_BOOK'
export const ADMIN_BOOK_INIT = 'admin/EXTENALS_BOOKS_INIT';
const initialState = {
    userInfo: [],
    externalBooks: [],
    inhouseBooks: [],
    userRentList: [],
    hasmoreBooksForAdmin: false,
    searchText: '',
    offset: 0,
    adminIsLoading: false,
    adminError: false,
}

export const removeAdminBook = createAction(ADMIN_REMOVE_HAVING_BOOK_REQUEST, id => id)
const admin = handleActions(
    {
        [ADMIN_BOOK_INIT]: (state, action) => {
            return {
                ...state,
                offset: 0,
                externalBooks: [],
                inhouseBooks: [],
                userInfo: [],
                userRentList: [],
                hasmoreBooksForAdmin: false,
                searchText: '',
                adminIsLoading: false,
                adminError: false
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
                adminError: false
            }
        },

        [ADMIN_REMOVE_HAVING_BOOK_SUCCESS]: (state, action) => {
            return {
                ...state,
                inhouseBooks: state.inhouseBooks.filter(book => action.payload !== book.bookId),
                adminError: false
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_FAILURE]: (state, action) => {
            return {
                ...state,
                adminError: true
            }
        },

        [SEARCH_ADMIN_USER_INFO_REQUEST]: (state, action) => {

            return {
                ...state,
                search: action.payload.search
            }
        },
        [SEARCH_ADMIN_USER_INFO_SUCCESS]: (state, action) => {
            const checkUnique = [];
            let result = { content: [] };
            action.payload.content.forEach((book) => {
                const id = book.rentedBookResponseDto.bookId;
                if (checkUnique.indexOf(id) < 0) {
                    checkUnique.push(id);
                    result.content = result.content.concat(book);
                }
            })
            result.content = result.content.filter(book => book.rentState === "RENT");

            return {
                ...state,
                userInfo: action.payload,
                userRentList: result
            }
        },
        [SEARCH_ADMIN_USER_INFO_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },

        [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
                adminIsLoading: true,
                searchText: action.payload.search,
                hasmoreBooksForAdmin: state.hasmoreBooksForAdmin.length ? state.hasmoreBooksForAdmin : true,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                adminIsLoading: false,
                externalBooks: state.externalBooks.concat(action.payload),
                hasmoreBooksForAdmin: action.payload.length !== 0 ? true : false,
                offset: state.offset + 1,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },


        [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST]: (state, action) => {
            return {
                ...state,
                adminIsLoading: true,
                searchText: action.payload.search,
                hasmoreBooksForAdmin: state.hasmoreBooksForAdmin.length ? state.hasmoreBooksForAdmin : true,
            }
        },

        [SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS]: (state, action) => {
            return {
                ...state,
                adminIsLoading: false,
                hasmoreBooksForAdmin: action.payload.length !== 0 ? true : false,
                inhouseBooks: state.inhouseBooks.concat(action.payload),
                offset: state.offset + 1,
            }
        },


        [SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE]: (state, action) => {
            return {
                ...state,

            }
        },

        [ADMIN_USER_RETURNB_BOOK]: (state, action) => {
            const result = {
                ...state.userInfo,
                content: state.userInfo.content.map((book, index) => {
                    if (book.rentedBookResponseDto.bookId === action.payload) {
                        return {
                            ...book, rentState: "RETURN"
                        }
                    }
                    return book;
                })
            }
            return {
                ...state,
                userInfo: result
            }
        },

    },
    initialState
)
export default admin;