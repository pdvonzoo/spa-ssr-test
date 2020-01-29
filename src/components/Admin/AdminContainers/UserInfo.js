import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";
import { returnBookAPI } from "../../../api/user";

export default () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.admin)
    const onSubmitCreate = (isbn) => {
        dispatch({ type: CREATE_BOOK_REQUEST, data: isbn })
    }

    const returnBook = async (bookId) => {
        const bookRentStatus = await returnBookAPI(bookId);
        if (bookRentStatus) {
            dispatch({ type: bookId });
        }
    }

    return (
        <>
            {userInfo && userInfo.content.map((book, idx) => {
                const { bookId,
                    bookTitle,
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
                            <Btn onClick={() => returnBook(bookId)}>반납하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};