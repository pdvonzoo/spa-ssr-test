import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { pointColor } from "../../common/colors";
// import { pointColor } from "../../common/colors";
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";

export default () => {

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