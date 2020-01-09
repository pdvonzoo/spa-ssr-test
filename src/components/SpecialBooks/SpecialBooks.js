import React from "react";
import styled from "styled-components";
import SpecialBook from "./SpecialBook";


const BooksContainer = styled.div`
  display: flex;
`;

export default ({ datas }) => {
    return <BooksContainer>
        {datas && datas.map((book, index) => <SpecialBook key={index} book={book} />)}
    </BooksContainer>
}