import React from "react";
import styled from "styled-components";
import { rentBookAPI } from "../../api/user";
import { RENT_BOOK } from '../../modules/user'
const StyledBookInfo = styled.div`
  padding: 1rem 2rem;
  flex: 1;
  background-color: #fff;
  border-right: 1px solid #e3e4df;
  height: 40%;
  @media (max-width: 1000px) {
    height: auto;
  }
`;


const StyledBookInfoText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

const StyledRentButton = styled.button`
  margin-top: 2rem;
  font-size: 14px;
  padding: .3rem .5rem;
  border: 0px;
  background: rgb(51,51,51);
  color: #fff;
`;

export default ({ title, author, publisher, pubdate, isbn }) => {
  const rentBook = async (bookIsbn, bookTitle) => {
    if (confirm(`${bookTitle} 책을 대여 하겠습니까?`)) {
      try {
        const result = await rentBookAPI(bookIsbn);
        Object.keys(result.data).length === 0 ? alert(`${bookTitle} 현재 모든 책이 예약 되어서 대여가 불가능합니다.`) : alert(`${bookTitle} 대여 성공 했습니다.`)
      } catch (e) {
        alert(`${bookTitle} 대여 실패 했습니다.`)
      }
    } else {
      alert('대여를 취소합니다.')
    }
  }
  return <StyledBookInfo>
    <StyledBookInfoText>{title}</StyledBookInfoText>
    <StyledBookInfoText>{author}</StyledBookInfoText>
    <StyledBookInfoText>{publisher}</StyledBookInfoText>
    <StyledBookInfoText>{pubdate}</StyledBookInfoText>
    <StyledBookInfoText>{isbn}</StyledBookInfoText>
    <StyledRentButton onClick={() => rentBook(isbn, title)}>대여하기</StyledRentButton>
  </StyledBookInfo>
}