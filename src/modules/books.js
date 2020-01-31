import { createAction, handleActions } from "redux-actions";
import { makeActionTypes } from "../Utils/makeActionTypes";

export const [SEARCH_BOOK_REQUEST, SEARCH_BOOK_SUCCESS, SEARCH_BOOK_FAILURE] = makeActionTypes('books/SEARCH_BOOK');
export const [GET_RECOMMENDED_BOOKS_REQUEST, GET_RECOMMENDED_BOOKS_SUCCESS, GET_RECOMMENDED_BOOKS_FAILURE] = makeActionTypes('books/GET_RECOMMENDED_BOOKS');
export const [SEARCH_A_BOOK_REQUEST, SEARCH_A_BOOK_SUCCESS, SEARCH_A_BOOK_FAILURE] = makeActionTypes('books/SEARCH_A_BOOK');


export const INIT_BOOKS = 'books/INIT_BOOKS';
export const dataLimitLength = 10;

const initialState = {

  isLoadging: false,
  searchResultBooks: [],
  hasMoreSearchBooks: false,
  isLoading_recommendedBooks: false,
  recommendedBooks: null,
  searchText: '',
  offset: 0,
};

const books = handleActions(
  {
    [INIT_BOOKS]: (state) => {
      return {
        ...state,
        searchResultBooks: [],
        offset: 0,
      }
    },
    [SEARCH_BOOK_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoadging: true,
        hasMoreSearchBooks: state.searchResultBooks.length ? state.hasMoreSearchBooks : true,
        searchText: action.payload.search,
      }
    },
    [SEARCH_BOOK_SUCCESS]: (state, action) => {
      return {
        ...state,
        isLoadging: false,
        searchText: state.searchText,
        searchResultBooks: state.searchResultBooks.concat(action.payload),
        hasMoreSearchBooks: action.payload.length !== 0 ? true : false,
        offset: state.offset + 1,
      }
    },
    [SEARCH_BOOK_FAILURE]: (state, action) => {

      return {
        ...state,
        isLoadging: false,
        hasMoreSearchBooks: false
      }
    },

    [GET_RECOMMENDED_BOOKS_REQUEST]: (state, action) => {
      return {
        ...state,
        isLoading_recommendedBooks: true
      }
    },
    [GET_RECOMMENDED_BOOKS_SUCCESS]: (state, action) => {
      console.log(action)
      return {
        ...state,
        recommendedBooks: action.payload,
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
