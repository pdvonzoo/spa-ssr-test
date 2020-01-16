import React, { useEffect } from "react";
import RecommendedBook from "./RecommendedBook";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { GET_RECOMMENDED_BOOKS_REQUEST } from '../../modules/books'

const BooksContainer = styled.div`
  display: flex;
`;

const BookList = () => {

  const dispatch = useDispatch();
  const { recommendedBooks } = useSelector(state => state.books);
  useEffect(() => {
    dispatch({ type: GET_RECOMMENDED_BOOKS_REQUEST })
  }, [])

  return (
    <BooksContainer>
      {recommendedBooks && recommendedBooks.map((book, index) => {
        const { bookTitle, bookWriter, bookImage, bookIsbn } = book;
        return (
          <RecommendedBook key={index} bookTitle={bookTitle} bookWriter={bookWriter} bookImage={bookImage} bookIsbn={bookIsbn} />
        )
      })}
    </BooksContainer>
  );
};
export default BookList;
