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
    const { externalBooks, adminIsLoading, offset, hasmoreBooksForAdmin, searchText } = useSelector(state => state.admin)
    const dispatch = useDispatch();

    const createBookFromRepository = async (book) => {
        const title = parse(book.title).map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
            .join("")
        if (confirm(`${parse(title)} 책을 추가 하시겠습니까?`)) {
            await createBookAPI(book).then(function () {
                alert(`${parse(title)} 책을 추가 완료 했습니다.`)
            }).catch(function () { alert(`${parse(title)} 책 추가를 실패 했습니다.`) })

        } else {
            alert('책 추가하기를 취소합니다.')
        }

    }

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasmoreBooksForAdmin && !adminIsLoading) {
                dispatch({ type: SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, payload: { search: searchText, offset: offset } })
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [adminIsLoading])


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