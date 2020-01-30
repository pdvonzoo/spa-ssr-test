import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";
import { returnBookAPI } from "../../../api/user";
import { ADMIN_USER_RETURNB_BOOK } from "../../../modules/admin";

export default () => {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.admin)
    const onSubmitCreate = (isbn) => {
        dispatch({ type: CREATE_BOOK_REQUEST, data: isbn })
    }

    const returnBook = async (bookId) => {

        console.log('admin return book')
        const result = await returnBookAPI(bookId).then(
            dispatch({ type: ADMIN_USER_RETURNB_BOOK, payload: bookId })
        )
    }

    return (
        <>
            {userInfo && userInfo.content.map((book, idx) => {
                const { rentState } = book;
                const { bookId,
                    bookTitle,
                    bookWriter,
                    bookPublisher,
                    bookPublishYear,
                    bookIsbn,
                    bookImage,
                } = book.rentedBookResponseDto;
                if (rentState === "RETURN")
                    return;
                return (
                    <div>
                        <Container key={idx}>
                            <TextContainer>
                                <Heading2>책 이름 : {bookTitle}</Heading2>
                                <Param>책 저자 : {bookWriter}</Param>
                                <Param>반납 여부 : {bookWriter}</Param>
                            </TextContainer>
                            <BtnContainer>
                                {rentState === "RENT" ?

                                    <Btn onClick={() => returnBook(bookId)}>반납하기</Btn> :
                                    <Btn onClick={() => rentBookAPI(bookIsbn)}>대여하기</Btn>
                                }

                            </BtnContainer>
                        </Container>

                        <div>

                        </div>
                    </div>
                )
            })}
        </>
    );
};