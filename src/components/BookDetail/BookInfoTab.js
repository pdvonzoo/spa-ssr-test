import React from "react";
import styled from "styled-components";
import BookInfo from "./BookInfo";
const Container = styled.div`
  position: fixed;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: #fff;
  @media (max-width: 1000px) {
    width: 100%;
    position: relative;
    border-bottom: 1px solid #e3e4df;
  }
`;

const BookImageContainer = styled.div`
  position: relative;
  height: 60%;
  border-right: 1px solid #e3e4df;
  border-bottom: 1px solid #e3e4df;
  @media (max-width: 1000px) {
    padding: 1rem 2rem;
  }
`;
const BookImage = styled.img`
  width: 14rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 1px solid rgb(51,51,51);
  @media (max-width: 1000px) {
    position: relative;
    transform: none;
    left: 0;
  }
`;

export default ({ bookId, image, title, author, publisher, pubdate, isbn }) => {
  return (
    <Container>
      <BookImageContainer>
        <BookImage src={image.split("?")[0]} alt={title} />
      </BookImageContainer>
      <BookInfo bookId={bookId} title={title} author={author} publisher={publisher} pubdate={pubdate} isbn={isbn} />
    </Container>
  )
}