import React, { useEffect } from "react";
import Book from "./Book";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { GET_RECOMMENDED_BOOKS_REQUEST } from '../../modules/books'

const BooksContainer = styled.div`
  display: ${props => props.display ? props.display : "block"};
`;

const BookList = ({ datas, display }) => {

  //추천도서 데이터 받기 
  const dispatch = useDispatch();
  const { recommendedBooks } = useSelector(state => state.books);
  // useEffect(() => {
  //   dispatch({ type: GET_RECOMMENDED_BOOKS_REQUEST })
  // }, [])

  return (
    <BooksContainer display={display}>
      {datas &&
        datas.map((book, index) => <Book key={index} book={book} />)}
    </BooksContainer>
  );
};
export default BookList;
