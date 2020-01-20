import React from "react";
import BookList from "../components/Book/BookList";
import styled from "styled-components";
import Search from "../components/Search/Search";

const HomeConatainer = styled.div`
  padding-top: 10rem;
  min-height: 100%;
  background-color: #e4e4e4;
`;

export default () => {
  return <>
    <Search />
    <HomeConatainer>
      <BookList />
    </HomeConatainer>
  </>;
};
