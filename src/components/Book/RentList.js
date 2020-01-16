import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { GET_MY_BOOKS_LOOKUP_REQUEST } from '../../modules/user';
import styled from "styled-components";
import { pointColor } from "../common/colors";

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

const RentList = () => {

  const dispatch = useDispatch();
  const { userLookUpBooks } = useSelector(state => state.user)

  useEffect(() => {
    console.log("get_my_books_lookup_request")
    dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
  }, [])
  return (
    <>
      {userLookUpBooks && userLookUpBooks.map((book, index) => {
        return (
          <Container>
            <img src={book.image} />
            <TextContainer key={index}>
              <Heading2>신청한 책 제목 {book.name} </Heading2>
              <Param>빌린 날짜 {book.date}</Param>
              <Param>반납여부 {book.isOk ? "반납 완료" : "반납 미완료"}</Param>
            </TextContainer>
            <BtnContainer>
              <Btn>반납하기</Btn>
            </BtnContainer>
          </Container>
        )
      })
      }
    </>
  )
};

export default RentList;
