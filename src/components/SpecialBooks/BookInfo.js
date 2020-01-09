import React from "react";
import styled from "styled-components";
import SmallHr from "../common/SmallHr";

const Container = styled.ul`
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

export default () => {
  return <Container>
    <ListTitle>{title}</ListTitle>
    <SmallHr />
    <ListText>{writer}</ListText>
    <RentalBtn onClick={rentOneBook}>책 대여하기</RentalBtn>
  </Container>;
}