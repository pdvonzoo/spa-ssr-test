import React, { useEffect } from "react";
import RecommendedBook from "./RecommendedBook";
import { useSelector, useDispatch } from 'react-redux'
import { GET_RECOMMENDED_BOOKS_REQUEST } from '../../modules/books'

const BookList = () => {
  const dispatch = useDispatch();
  const { recommendedBooks } = useSelector(state => state.books);
  useEffect(() => {
    dispatch({ type: GET_RECOMMENDED_BOOKS_REQUEST })
  }, [])

  return (
    <>
      {recommendedBooks && recommendedBooks.map((book, index) => {
        const { bookTitle, bookWriter, bookImage, bookIsbn } = book;
        return (
          <RecommendedBook key={index} bookTitle={bookTitle} bookWriter={bookWriter} bookImage={bookImage} bookIsbn={bookIsbn} />
        )
      })}
    </>
  );
};
export default BookList;
