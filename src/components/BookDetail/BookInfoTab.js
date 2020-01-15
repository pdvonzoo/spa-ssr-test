import React from "react";
import styled from "styled-components";
import BookInfo from "./BookInfo";
import { useSelector } from 'react-redux'
const Container = styled.div`
  position: fixed;
  left: 0;
  width: 30%;
  height: 100%;
  background-color: #fff;
`;

const BookImageContainer = styled.div`
  position: relative;
  height: 60%;
  border-right: 1px solid #e3e4df;
  border-bottom: 1px solid #e3e4df;
`;
const BookImage = styled.img`
  width: 14rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export default ({ image, title, author, publisher, pubdate, isbn }) => {


  return (
    <Container>
      <BookImageContainer>
        <BookImage src={image} alt={title} />
      </BookImageContainer>
      <BookInfo title={title} author={author} publisher={publisher} pubdate={pubdate} isbn={isbn} />
    </Container>
  )
}