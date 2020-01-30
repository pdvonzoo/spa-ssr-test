import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";
import { returnBookAPI } from "../../../api/user";
import { RETURN_MY_BOOK } from "../../../modules/user";

export default () => {

    const dispatch = useDispatch();
    const { userInfo, userRentList } = useSelector(state => state.admin)
    const onSubmitCreate = (isbn) => {
        dispatch({ type: CREATE_BOOK_REQUEST, payload: isbn })
    }

    const returnBook = async (bookId) => {
        await returnBookAPI(bookId);
        dispatch({ type: RETURN_MY_BOOK, payload: bookId });

    }

    return (
        <>
            {userRentList.content && <Heading2>사용자 대여 목록</Heading2>}
            {userRentList.content && userRentList.content.map((book, idx) => {
                const { rentState } = book;
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
                            <Param>반납 여부 : {rentState === "RENT" ? "대여중" : "반납완료"}</Param>
                        </TextContainer>
                    </Container>

                )
            })}
            {userRentList.content && <Heading2>사용자 히스토리</Heading2>}
            {userInfo.content && userInfo.content.map((book, idx) => {
                const { rentState } = book;
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
                            <Param>반납 여부 : {rentState === "RENT" ? "대여중" : "반납완료"}</Param>
                        </TextContainer>
                    </Container>
                )
            })}
        </>
    );
};