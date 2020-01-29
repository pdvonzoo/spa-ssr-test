import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from "styled-components";
// import { pointColor } from '../common/colors';
import parse from 'html-react-parser';
import { createBookAPI } from '../../../api/admin'
import { pointColor } from '../../common/colors';
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn } from "./StyledAdminContainers";
import { SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, EXTENALS_BOOKS_INIT } from '../../../modules/admin'
export default () => {
    const { externalBooks, extenalLoading, offset, hasmoreExternalsBooks, searchText } = useSelector(state => state.admin)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: EXTENALS_BOOKS_INIT });
        dispatch({ type: SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, payload: { search: searchText, offset: 0 } })
    }, [])

    const createBookFromRepository = useCallback((book) => {
        createBookAPI(book).then(res => console.log(res));
    }, [externalBooks])

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasmoreExternalsBooks && !extenalLoading) {
                dispatch({ type: SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, payload: { search: searchText, offset: offset } })
            }
        }
    }



    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [extenalLoading])


    return (
        <>
            {externalBooks && externalBooks.map((book, index) => {
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
                const parseTitle = parse(title);
                console.log(parseTitle);
                return (
                    <Container key={index}>
                        <TextContainer>
                            <Heading2>책 이름 : {parseTitle}</Heading2>
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