import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
// import { pointColor } from '../common/colors';

import { createBookAPI } from '../../../api/admin'
import { pointColor } from '../../common/colors';
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";

export default () => {
    const { hasBooks } = useSelector(state => state.admin)
    const createBookFromRepository = useCallback((book) => {
        createBookAPI(book).then(res => console.log(res));
    }, [hasBooks])
    return (
        <>
            {hasBooks && hasBooks.map((book, index) => {
                const { title,
                    link,
                    image,
                    author,
                    price,
                    discount,
                    publisher,
                    pubdate,
                    isbn,
                    description } = book;
                return (
                    <Container key={index}>
                        <TextContainer>
                            <Heading2>책 이름 : {title}</Heading2>
                            <Param>책 저자 : {author}</Param>
                        </TextContainer>
                        <BtnContainer>
                            <Btn onClick={() => createBookFromRepository(book)}>추가하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};