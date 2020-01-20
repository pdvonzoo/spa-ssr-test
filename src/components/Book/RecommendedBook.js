import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { rentBookAPI } from "../../api/user";

const BookLayout = styled.div`
  width: 33.3333%;
  padding: 0 30px;
`;
const BookCover = styled.div`
  opacity: .9;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: middle;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(51,51,51,0.9);
  transition: opacity .25s cubic-bezier(.77,0,.175,1);
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
  return (
    <BookLayout>
      <Link to={`/product/detail/${bookIsbn}`} >
        <ImageContainer>
          <BookImage src={bookImage} alt="추천 책" />
          <BookCover>
            <BookCoverText>detail</BookCoverText>
          </BookCover>
        </ ImageContainer>
      </Link>
      <BookInfo>
        <ListTitle>{bookTitle}</ListTitle>
        <SmallHr></SmallHr>
        <ListText>{bookWriter}</ListText>
        <RentalBtn onClick={rentBookAPI}>책 대여하기</RentalBtn>
      </BookInfo>
    </BookLayout>

  );
};

export default RecommendedBook;
