import React from "react";
import styled from "styled-components";

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

export default ({ title, author, publisher, pubdate, isbn }) => <StyledBookInfo>
  <StyledBookInfoText>{title}</StyledBookInfoText>
  <StyledBookInfoText>{author}</StyledBookInfoText>
  <StyledBookInfoText>{publisher}</StyledBookInfoText>
  <StyledBookInfoText>{pubdate}</StyledBookInfoText>
  <StyledBookInfoText>{isbn}</StyledBookInfoText>
  {/* <p>{isRental}</p> */}
</StyledBookInfo>