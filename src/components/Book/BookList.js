import React, { useEffect } from "react";
import Book from "./Book";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { GET_RECOMMENDED_BOOKS_REQUEST } from '../../modules/books'

const BooksContainer = styled.div`
  display: flex;
`;

const datas = [
  {
    "image": "https://pw.imgix.net/2018/08/A5-ANTELOPE.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&q=100",
    "title": "Test1",
    "writer": "we make price",
    "publisher": "리액틑출판사",
    "publisherYear": 2019,
    "createAt": "1929393",
    "updateAt": "1231232412",
    "isbn": 213912312,
    "isRental": true
  },
  {
    "image": "https://pw.imgix.net/2019/04/A5-GIRAFFE.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&q=100",
    "title": "Test1",
    "writer": "we make price",
    "publisher": "리액틑출판사",
    "publisherYear": 2019,
    "createAt": "1929393",
    "updateAt": "1929393",
    "isbn": 213912312,
    "isRental": true
  },
  {
    "image": "https://pw.imgix.net/2018/07/IMG_6910.jpg?auto=compress%2Cformat&ixlib=php-1.2.1&q=100",
    "title": "Test1",
    "writer": "we make price",
    "publisher": "리액틑출판사",
    "publisherYear": 2019,
    "createAt": "1929393",
    "updateAt": "1929393",
    "isbn": 213912312,
    "isRental": true
  }
];

const BookList = () => {
  //추천도서 데이터 받기 
  const dispatch = useDispatch();
  const { recommendedBooks } = useSelector(state => state.books);
  // useEffect(() => {
  //   dispatch({ type: GET_RECOMMENDED_BOOKS_REQUEST })
  // }, [])

  return (
    <BooksContainer>
      {datas &&
        datas.map((book, index) => <Book key={index} book={book} />)}
    </BooksContainer>
  );
};
export default BookList;
