import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [GET_MY_BOOKS_LOOKUP_REQUEST, GET_MY_BOOKS_LOOKUP_SUCCESS, GET_MY_BOOKS_LOOKUP_FAILURE] = makeActionTypes('user/GET_MY_BOOKS_LOOKUP');
export const USER_LOGIN = 'user/USER_LOGIN'
export const USER_LOGOUT = 'user/USER_LOGOUT';
export const userLogin = createAction(USER_LOGIN, user => user);
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
            console.log(action)
            return {
                ...state,
                isLoading: false,
                userLookUpBooks: action.payload
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