import React, { useState } from "react";
import { rentOneBook } from "./BookListAPI";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BookLayout = styled.div`
  flex: 1;
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
  background: #133ba3;
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
  width: 100%;
  cursor: pointer;
  &:hover {
    ${BookCover}{
      display: flex;
    }
  }
`;

const BookImage = styled.img`
  width: 100%;
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

const Book = ({ book, height }) => {
  const { image, title, writer, publisher, publisherYear, isbn, isRental } = book;
  return (
    <BookLayout height={height}>
      <Link to="/book" >
        <ImageContainer>
          <BookImage src={image} alt="추천 책" />
          <BookCover>
            <BookCoverText>detail</BookCoverText>
          </BookCover>
        </ ImageContainer>
      </Link>
      <BookInfo>
        <ListTitle>{title}</ListTitle>
        <SmallHr></SmallHr>
        <ListText>{writer}</ListText>
        {/* <ListText>{isRental ? "렌탈 가능" : "렌탈 불가능"}</ListText> */}
        <RentalBtn onClick={rentOneBook}>책 대여하기</RentalBtn>
        {/* <ListText>책 이름 : {title}</ListText>
        <ListText>책 저자 : {writer}</ListText>
        <ListText>출판사 : {publisher}</ListText>
        <ListText>출판 년도 : {publisherYear}</ListText>
        <ListText>isbn : {isbn}</ListText>
        <ListText>렌탈 여부 :{isRental ? "출판가능" : "출판 불가능"}</ListText>
        <button onClick={rentOneBook}>책 대여하기</button> */}
      </BookInfo>
    </BookLayout>

  );
};

export default Book;
