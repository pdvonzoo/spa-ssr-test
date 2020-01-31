import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE] = makeActionTypes('user/GET_MY_BOOKS_LOOKUP');

export const USER_LOGIN = 'user/USER_LOGIN'
export const USER_LOGOUT = 'user/USER_LOGOUT';
export const RETURN_MY_BOOK = 'user/RETURN_MY_BOOK';
export const RENT_BOOK = 'user/RENT_BOOK';
export const userLogin = createAction(USER_LOGIN);
export const userlogout = createAction(USER_LOGOUT);
export const returnBook = createAction(RETURN_MY_BOOK);
export const rentBook = createAction(RENT_BOOK);
export const getMyBooksLookUp = createAction(GET_MY_BOOKS_LOOKUP_REQUEST); //유저 빌린 책 정보 조회

const initialState = {
    userLookUpBooks: [],
    userRentList: [],
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
            let bookInfo;
            const result = {
                content: state.userRentList.content.map(book => {
                    if (book.rentedBookResponseDto.bookId === action.payload) {
                        bookInfo = { ...book, rentState: "RETURN" };
                        return { ...book, rentState: "RETURN" };
                    };
                    return book;
                })
            };
            result.content = result.content.filter(book => {
                console.log(action.payload + " " + book.rentedBookResponseDto.bookId)
                return action.payload !== book.rentedBookResponseDto.bookId
            });
            return {
                ...state,
                userLookUpBooks: { ...state.userLookUpBooks, content: [bookInfo, ...state.userLookUpBooks.content] },
                userRentList: result
            }
        },

        [RENT_BOOK]: (state, action) => {
            console.log(action)
            const result = {
                content: state.userLookUpBooks.content.map(book => {
                    if (book.rentedBookResponseDto.bookIsbn === action.payload) {
                        return { ...book, rentState: "RENT" };
                    };
                    return book;
                })
            };
            return {
                ...state,
                userLookUpBooks: result
            }
        },

        [GET_MY_BOOKS_LOOKUP_REQUEST]: (state, action) => {
            return {
                ...state,
                isLoading: true,

            }
        },

        [GET_MY_BOOKS_LOOKUP_SUCCESS]: (state, action) => {
            console.log(action);
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
                isLoading: false,
                userLookUpBooks: action.payload,
                userRentList: result
            }
        },


        [GET_MY_BOOKS_LOOKUP_FAILURE]: (state, action) => {
            return {
                ...state,
            }
        },
    },
    initialState
)
export default user;