import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ADMIN_REMOVE_HAVING_BOOK_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, removeAdminBook } from '../../../modules/admin';
import { Container, TextContainer, BtnContainer, Heading2, Param, Btn, Img } from "./StyledAdminContainers";

export default () => {
    const dispatch = useDispatch();
    const { inhouseBooks, adminIsLoading, offset, hasmoreBooksForAdmin, searchText, adminError } = useSelector(state => state.admin)

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasmoreBooksForAdmin && !adminIsLoading) {
                dispatch({ type: SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, payload: { search: searchText, offset: offset } })
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [adminIsLoading])

    const deleteBook = useCallback(async (id, name) => {
        if (confirm(`${name}을 정말로 삭제하시겠습니까?`)) {
            dispatch({ type: ADMIN_REMOVE_HAVING_BOOK_REQUEST, payload: id })
            adminError ? alert(`${name} 삭제를 실패 했습니다.`) : alert(`${name} 삭제를 완료 했습니다.`)
        } else {
            alert("삭제를 취소합니다.")
        }
    }, [inhouseBooks, adminError])

    return (
        <>
            {inhouseBooks && inhouseBooks.map((book, index) => {
                return (
                    <Container>
                        <Img src={book.bookImage.split("?")[0]} />
                        <TextContainer>
                            <Heading2>{book.bookTitle}</Heading2>
                            <Param>{book.bookWriter}</Param>
                            <Param>{book.bookPublisher}</Param>
                            <Param>{book.bookIsbn}</Param>
                        </TextContainer>
                        <BtnContainer>
                            <Btn onClick={() => deleteBook(book.bookId, book.bookTitle)}>책 삭제하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};