import React from "react";
import styled from "styled-components";
import BookInfo from "./BookInfo";
import { books } from "./adminMock";

const Container = styled.div`
  padding-top: 1rem;
`;

export default () => {
  return (
    <Container>
      {books && books.map((book, idx) => <BookInfo key={idx} book={book} />)}
    </Container>
  );
};
