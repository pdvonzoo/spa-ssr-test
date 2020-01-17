import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
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

const AdminSearch = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(state => state.admin)
    const onSubmitCreate = (isbn) => {
        dispatch({ type: CREATE_BOOK_REQUEST, data: isbn })
    }
    return (
        <>
            {books && books.content.map((book, idx) => {
                const { bookTitle,
                    bookWriter,
                    bookPublisher,
                    bookPublishYear,
                    bookIsbn,
                    bookImage,
                } = book.rentedBookResponseDto;
                return (
                    <Container key={idx}>
                        <TextContainer>
                            <Heading2>책 이름 : {bookTitle}</Heading2>
                            <Param>책 저자 : {bookWriter}</Param>
                            <Param>반납 여부 : {bookWriter}</Param>
                        </TextContainer>
                        <BtnContainer>
                            <Btn onClick={() => onSubmitCreate(bookIsbn)}>반납하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};

export default AdminSearch;