import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rentBookAPI } from "../../api/user";
import BookCover from "../common/BookCover";

const BookLayout = styled.div`
  width: 33.3333%;
  padding: 0 30px;
`;

const BookCoverText = styled.div`
  color: #fff;
  font-size: 1.4rem;
  line-height: 1;
  font-weight: 700;
  padding: 1rem;
  align-items: center;
  display: flex;
`;

const ImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  background-color: rgb(51,51,51);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 0;
  padding-top: 100%;
  &:hover {
    ${BookCover}{
      display: flex;
    }
  }
`;

const BookImage = styled.img`
  width: auto;
  height: 70%;
  transform: translateX(-50%) translateY(-50%);
  position: absolute;
  top: 50%;
  left: 50%;
`;
const BookInfo = styled.ul`
  padding: 1.75rem 1.25rem;
  background-color: #fff;
  text-align: center;
  min-height: 7.8rem;
`;
const ListTitle = styled.li`
  text-transform: uppercase;
  font-size: .9rem;
  font-weight: 700;
  font-family: Chivo,sans-serif;
  margin-bottom: .75rem;
`;
const SmallHr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-sizing: content-box;
  height: 0;
  width: 2rem;
  overflow: visible;
  border: 1px solid #343434;
`;
const ListText = styled.li`
  font-family: 'Chivo', sans-serif;
  font-size: .9rem;
  font-weight: 400;
  line-height: 1.3rem;
`;
const RentalBtn = styled.button`
  margin-top: 1rem;
  border: 0px;
  background: inherit;
`;

const RecommendedBook = ({ bookTitle, bookWriter, bookImage, bookIsbn }) => {
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
  return (
    <BookLayout>
      <Link to={`/product/detail/${bookIsbn}`} >
        <ImageContainer>
          <BookImage src={bookImage.split("?")[0]} alt="추천 책" />
          <BookCover>
            <BookCoverText>detail</BookCoverText>
          </BookCover>
        </ ImageContainer>
      </Link>
      <BookInfo>
        <ListTitle>{bookTitle}</ListTitle>
        <SmallHr></SmallHr>
        <ListText>{bookWriter}</ListText>
        <RentalBtn onClick={() => rentBook(bookIsbn, bookTitle)}>책 대여하기</RentalBtn>
      </BookInfo>
    </BookLayout>

  );
};

export default RecommendedBook;
