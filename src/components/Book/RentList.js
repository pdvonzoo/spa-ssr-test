import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GET_MY_BOOKS_LOOKUP_REQUEST, RETURN_MY_BOOK, RENT_BOOK } from '../../modules/user';
import styled from "styled-components";
import { pointColor } from "../common/colors";
import { returnBookAPI, rentBookAPI } from "../../api/user";

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border: 1px solid #040404;
    margin: auto;
    margin-bottom: -1px;
`;

const TextContainer = styled.div`
  padding-left: 2rem;
  flex: 1;
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: baseline;
`;

const Heading2 = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
`;
const Param = styled.p`
    font-size: 1.2rem;
`;
const Btn = styled.button`
    margin-left: 1rem;
    padding: .4rem .8rem;
    border: 0;
    border-radius: 2rem;
    background-color: ${pointColor};
`;

const RentList = ({ status }) => {
  const dispatch = useDispatch();
  const { userLookUpBooks, userRentList, isLoading } = useSelector(state => state.user)


  useEffect(() => {
    console.log("get_my_books_lookup_request")
    dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
  }, [])

  const returnBook = async (bookId) => {
    await returnBookAPI(bookId);
    dispatch({ type: RETURN_MY_BOOK, payload: bookId });
  }

  const rentBook = async (bookIsbn) => {
    await rentBookAPI(bookIsbn);
    dispatch({ type: RENT_BOOK, payload: bookIsbn });
  }
  return (
    <>
      {status === "total" ? userLookUpBooks.content && !isLoading &&
        userLookUpBooks.content.map((book, index) => {
          const { rentState } = book;
          const { bookTitle, bookWriter, bookId, bookImage, bookIsbn } = book.rentedBookResponseDto;
          return (
            <>
              <Container>
                <img src={bookImage.split("?")[0]} />
                <TextContainer key={index}>
                  <Heading2>{bookTitle}</Heading2>
                  <Param>{bookWriter}</Param>
                  {
                    status === "current" ? <Param>대여 중</Param> :
                      <Param>{rentState === "RENT" ? "대여 내역" : "반납 완료"}</Param>}
                </TextContainer>
                {status === "current" ? <BtnContainer>
                  {rentState === "RENT" ?
                    <Btn onClick={() => returnBook(bookId)}>반납하기</Btn> :
                    <Btn onClick={() => rentBook(bookIsbn)}>대여하기</Btn>}
                </BtnContainer> : null}
              </Container>
            </>
          )
        }) : userRentList.content && !isLoading &&
        userRentList.content.map((book, index) => {
          const { rentState } = book;
          const { bookTitle, bookWriter, bookId, bookImage, bookIsbn } = book.rentedBookResponseDto;
          return (
            <>
              <Container>
                <img src={bookImage.split("?")[0]} />
                <TextContainer key={index}>
                  <Heading2>{bookTitle}</Heading2>
                  <Param>{bookWriter}</Param>
                  {
                    status === "current" ? <Param>대여 중</Param> :
                      <Param>{rentState === "RENT" ? "대여 내역" : "반납 완료"}</Param>}
                </TextContainer>
                {status === "current" ? <BtnContainer>
                  {rentState === "RENT" ?
                    <Btn onClick={() => returnBook(bookId)}>반납하기</Btn> :
                    <Btn onClick={() => rentBook(bookIsbn)}>대여하기</Btn>}
                </BtnContainer> : null}
              </Container>
            </>
          )
        })
      }
    </>
  )
};

export default RentList;
