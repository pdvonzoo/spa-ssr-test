import React from "react";
import styled from "styled-components";

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

export default ({ image }) => {
    return <ImageContainer>
        <BookImage src={image} alt="추천 책" />
        <BookCover>
            <BookCoverText>detail</BookCoverText>
        </BookCover>
    </ ImageContainer>;
}