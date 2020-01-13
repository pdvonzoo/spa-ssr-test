import { createAction, handleActions } from "redux-actions";

export const GET_MY_BOOKS_LOOKUP_REQUEST = 'user/GET_MY_BOOKS_REQUEST'
export const GET_MY_BOOKS_LOOKUP_SUCCESS = 'user/GET_MY_BOOKS_SUCCESS'
export const GET_MY_BOOKS_LOOKUP_FAILURE = 'user/GET_MY_BOOKS_FAILURE'
export const USER_LOGIN = 'user/USER_LOGIN'
export const USER_LOGOUT = 'user/USER_LOGOUT';

export const userLogin = createAction(USER_LOGIN, user => user);
export const getMyBooksLookUp = createAction(GET_MY_BOOKS_LOOKUP_REQUEST); //유저 빌린 책 정보 조회

export const TEST_BOOKS = 'user/TEST_BOOKS';
export const TEST_INCREMENT = 'user/TEST_INCREMENT';
export const testBooks = createAction(TEST_BOOKS);

const initialState = {
    userLookUpBooks: [],
    isLoading: false,
    isLogged: false,
    number: 1,
}


const user = handleActions(
    {
        [TEST_INCREMENT]: (state, action) => {
            return {
                ...state,
                number: state.number + action.number
            }
        },
        [USER_LOGIN]: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        [USER_LOGOUT]: (state) => {
            return {
                ...state,
                isLoading: false
            }
        },

        [GET_MY_BOOKS_LOOKUP_REQUEST]: (state, action) => {
            return {
                ...state,
                isLoading: true,

            }
        },

        [GET_MY_BOOKS_LOOKUP_SUCCESS]: (state, action) => {
            return {
                ...state,
                isLoading: false,
                userLookUpBooks: action.data
            }
        },


        [GET_MY_BOOKS_LOOKUP_FAILURE]: (state, action) => {
            return {
                ...state,
                isLoading: false,
            }
        },
    },
    initialState
)
export default user;