import { handleActions } from "redux-actions";
import { makeActionTypes } from '../Utils/makeActionTypes'

export const [SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_USER_INFO_SUCCESS, SEARCH_ADMIN_USER_INFO_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_USER_INFO')
export const [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS, SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_EXTERNAL_BOOKS');
export const [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS, SEARCH_ADMIN_INHOUSE_BOOKS_FAILURE] = makeActionTypes('admin/SEARCH_ADMIN_INHOUSE_BOOKS');
export const [ADMIN_REMOVE_HAVING_BOOK_REQUEST, ADMIN_REMOVE_HAVING_BOOK_SUCCESS, ADMIN_REMOVE_HAVING_BOOK_FAILURE] = makeActionTypes('admin/ADMIN_REMOVE_HAVING_BOOK');
export const ADMIN_USER_RETURNB_BOOK = 'admin/ADMIN_USER_RETURNB_BOOK'
export const ADMIN_BOOK_INIT = 'admin/EXTENALS_BOOKS_INIT';
const initialState = {
    userInfo: null,
    externalBooks: [],
    inhouseBooks: [],
    hasmoreBooksForAdmin: false,
    searchText: '',
    offset: 0,
    adminIsLoading: false,
    adminError: ""
}
const admin = handleActions(
    {
        [ADMIN_BOOK_INIT]: (state, action) => {
            return {
                ...state,
                offset: 0,
                externalBooks: [],
                inhouseBooks: [],
                userInfo: null,
                hasmoreBooksForAdmin: false,
                searchText: '',
                adminIsLoading: false,
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_REQUEST]: (state, action) => {
            return {
                ...state,
            }
        },

        [ADMIN_REMOVE_HAVING_BOOK_SUCCESS]: (state, action) => {
            alert('삭제가 완료되었습니다.')
            return {
                ...state,
                inhouseBooks: state.inhouseBooks.filter(book => action.payload !== book.bookId)
            }
        },
        [ADMIN_REMOVE_HAVING_BOOK_FAILURE]: (state, action) => {
            alert("삭제가 실패하였습니다.")
            return {
                ...state,
                adminError: '삭제를 실패 했습니다.'
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

            const checkUnique = [];
            let result = { content: [] };
            action.payload.content.forEach((book) => {
                const id = book.rentedBookResponseDto.bookId;
                if (checkUnique.indexOf(id) < 0) {
                    checkUnique.push(id);
                    result.content = result.content.concat(book);
                }
            })


            return {
                ...state,
                userInfo: result
            }
        },
        [SEARCH_ADMIN_USER_INFO_FAILURE]: (state, action) => {
            return {
                ...state,
                adminError: "유저 검색에 실패 했습니다."
            }
        },

        [SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST', action);
            return {
                ...state,
                adminIsLoading: true,
                searchText: action.payload.search,
                hasmoreBooksForAdmin: state.hasmoreBooksForAdmin.length ? state.hasmoreBooksForAdmin : true,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_SUCCESS', action);
            return {
                ...state,
                adminIsLoading: false,
                externalBooks: state.externalBooks.concat(action.payload),
                hasmoreBooksForAdmin: action.payload.length !== 0 ? true : false,
                offset: state.offset + 1,
            }
        },
        [SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE]: (state, action) => {
            console.log('SEARCH_ADMIN_EXTERNAL_BOOKS_FAILURE', action)
            return {
                ...state,
                adminError: "책 검색에 실패했습니다."
            }
        },


        [SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST]: (state, action) => {
            console.log('SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST', action)
            return {
                ...state,
                adminIsLoading: true,
                searchText: action.payload.search,
                hasmoreBooksForAdmin: state.hasmoreBooksForAdmin.length ? state.hasmoreBooksForAdmin : true,
            }
        },

        [SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS]: (state, action) => {
            console.log('SEARCH_ADMIN_INHOUSE_BOOKS_SUCCESS', action)
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
                adminError: "책 검색에 실패했습니다."
            }
        },

        [ADMIN_USER_RETURNB_BOOK]: (state, action) => {
            console.log('ADMIN_USER_RETURNB_BOOK', action)
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