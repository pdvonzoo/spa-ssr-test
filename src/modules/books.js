import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [SEARCH_BOOK_REQUEST, SEARCH_BOOK_SUCCESS, SEARCH_BOOK_FAILURE] = makeActionTypes('books/SEARCH_BOOK');
export const [GET_RECOMMENDED_BOOKS_REQUEST, GET_RECOMMENDED_BOOKS_SUCCESS, GET_RECOMMENDED_BOOKS_FAILURE] = makeActionTypes('books/GET_RECOMMENDED_BOOKS');
export const [SEARCH_A_BOOK_REQUEST, SEARCH_A_BOOK_SUCCESS, SEARCH_A_BOOK_FAILURE] = makeActionTypes('books/SEARCH_A_BOOK');
export const INIT_BOOKS = 'books/INIT_BOOKS';
export const dataLimitLength = 10; //가져오는 책의 길이

const initialState = {
  isLoadging: false,
  searchResultBooks: [],
  hasMoreSearchBooks: false,
  isLoading_recommendedBooks: false,
  recommendedBooks: [],
  searchText: '',
};

const books = handleActions(
  {
    [INIT_BOOKS]: (state) => ({ searchResultBooks: [] }),
    [SEARCH_BOOK_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoadging: true,
        hasMoreSearchBooks: state.searchResultBooks.length ? state.hasMoreSearchBooks : true,

      }
    },
    [SEARCH_BOOK_SUCCESS]: (state, action) => {
      console.log("SEARCH_BOOK_SUCCESS 의 액션 : ", action, action.payload.type, action.payload)
      return {
        ...state,
        isLoadging: false,
        searchText: "dsd",
        searchResultBooks: state.searchResultBooks.concat(action.payload),
        hasMoreSearchBooks: action.payload.length === dataLimitLength
      }
    },
    [SEARCH_BOOK_FAILURE]: (state, action) => {

      return {
        ...state,
        isLoadging: false,
        hasMoreSearchBooks: false
      }
    },

    //추천도서 API
    [GET_RECOMMENDED_BOOKS_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoading_recommendedBooks: true
      }
    },
    [GET_RECOMMENDED_BOOKS_SUCCESS]: (state, action) => {
      return {
        ...state,
        recommendedBooks: action.data,
        isLoading_recommendedBooks: false

      }
    },
    [GET_RECOMMENDED_BOOKS_FAILURE]: (state, action) => {
      return {
        ...state,
      }
    },

  },
  initialState
);

export default books;
