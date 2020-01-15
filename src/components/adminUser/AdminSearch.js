import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { CREATE_BOOK_REQUEST } from '../../modules/admin'
import { pointColor } from "../common/colors";

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border: 1px solid #040404;
    margin: auto;
    margin-bottom: -1px;
`;

const TextContainer = styled.div`
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: baseline;
`;

const Heading2 = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
`;
const Param = styled.p`
    font-size: 1.2rem;
`;
const Btn = styled.button`
    margin-left: 1rem;
    padding: .4rem .8rem;
    border: 0;
    border-radius: 2rem;
    background-color: ${pointColor};
`;

import SearchNewBook from './SearchNewBook';
const AdminSearch = () => {

    const dispatch = useDispatch();
    const { books } = useSelector(state => state.admin)
    const onSubmitCreate = (isbn) => {
        dispatch({ type: CREATE_BOOK_REQUEST, data: isbn.split(' ')[0] })
    }



    return (
        <>
            {/* <SearchNewBook /> */}
            {books && books.map((book, idx) => {
                return (
                    <Container key={idx}>
                        <TextContainer>
                            <Heading2>책 이름 : {book.title}</Heading2>
                            <Param>책 저자 : {book.author}</Param>
                        </TextContainer>
                        <BtnContainer>
                            <Btn onClick={() => onSubmitCreate(book.isbn)}  >추가하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};

export default AdminSearch;