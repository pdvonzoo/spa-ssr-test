import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import SearchABook from './searchABook';
import styled from "styled-components";
import { onScroll } from "../../Utils/events";

const Container = styled.ul`
    border-top: 1px solid #ddd;
    padding: 10rem 8rem;
    background-color: #eee;
    min-height: 100%;
    @media (max-width: 1300px) {
        padding: 8rem 5rem;
    }
    @media (max-width: 1000px) {
        padding: 6rem 4rem;
    }
    @media (max-width: 768px) {
        padding: 4rem 2rem;
    }
    @media (max-width: 600px) {
        padding: 4rem 0;
    }
`;

const BlankResult = styled.div`
    margin: 5rem 0;
    text-align: center;
    font-size: 2rem;
`;
export default () => {

    const { search } = useParams();
    const { searchResultBooks, isLoadging, hasMoreSearchBooks, offset } = useSelector(state => state.books);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: INIT_BOOKS });
        dispatch({ type: SEARCH_BOOK_REQUEST, payload: { search, offset: 0 } })
    }, [search])

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight < document.documentElement.scrollHeight - 250) return;
        if (hasMoreSearchBooks && !isLoadging) {
            dispatch({ type: SEARCH_BOOK_REQUEST, payload: { search, offset } })
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [isLoadging])


    return (
        <Container>
            {searchResultBooks.length ? searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.bookTitle} author={book.bookWriter} image={book.bookImage.split("?")[0]} pubdate={book.bookPublishYear} isbn={book.bookIsbn} />
                )
            }) : <BlankResult>검색된 책이 존재하지 않습니다.</BlankResult>}
        </Container>
    );
};