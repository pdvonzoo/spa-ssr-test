import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE] = makeActionTypes('user/GET_MY_BOOKS_LOOKUP');
export const USER_LOGIN = 'user/USER_LOGIN'
export const USER_LOGOUT = 'user/USER_LOGOUT';
export const RETURN_MY_BOOK = 'user/RETURN_MY_BOOK';
export const userLogin = createAction(USER_LOGIN);
export const userlogout = createAction(USER_LOGOUT);
export const returnBook = createAction(RETURN_MY_BOOK);
export const getMyBooksLookUp = createAction(GET_MY_BOOKS_LOOKUP_REQUEST); //유저 빌린 책 정보 조회

const initialState = {
    userLookUpBooks: [],
    isLoading: false,
    isLogged: false,
    number: 1000000,
}


const user = handleActions(
    {
        [USER_LOGIN]: (state) => {
            return {
                ...state,
                isLogged: true
            }
        },

        [USER_LOGOUT]: (state) => {
            return {
                ...state,
                isLogged: false
            }
        },

        [RETURN_MY_BOOK]: (state, action) => {
            return {
                ...state,
                userLookUpBooks: state.userLookUpBooks.filter(book => book.rentedBookResponseDto.bookId !== action.bookId)
            }
        },

        [GET_MY_BOOKS_LOOKUP_REQUEST]: (state, action) => {
            return {
                ...state,
                isLoading: true,

            }
        },

        [GET_MY_BOOKS_LOOKUP_SUCCESS]: (state, action) => {
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
                isLoading: false,
                userLookUpBooks: result
            }
        },


        [GET_MY_BOOKS_LOOKUP_FAILURE]: (state, action) => {
            console.log("get_my_books_lookup_failure", action)
            return {
                ...state,
            }
        },
    },
    initialState
)
export default user;