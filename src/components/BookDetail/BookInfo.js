import React from "react";
import styled from "styled-components";
import { rentBookAPI } from "../../api/user";

const StyledBookInfo = styled.div`
  padding: 1rem 2rem;
  flex: 1;
  background-color: #fff;
  border-right: 1px solid #e3e4df;
  height: 40%;
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
  const rentBook = async (bookIsbn) => {
    try {
      await rentBookAPI(bookIsbn);
    } catch (e) {
      alert("이미 대여중인 책입니다.");
    }
  }
  return <StyledBookInfo>
    <StyledBookInfoText>{title}</StyledBookInfoText>
    <StyledBookInfoText>{author}</StyledBookInfoText>
    <StyledBookInfoText>{publisher}</StyledBookInfoText>
    <StyledBookInfoText>{pubdate}</StyledBookInfoText>
    <StyledBookInfoText>{isbn}</StyledBookInfoText>
    <StyledRentButton onClick={_ => rentBook(isbn)}>대여하기</StyledRentButton>
    {/* <p>{isRental}</p> */}
  </StyledBookInfo>
}