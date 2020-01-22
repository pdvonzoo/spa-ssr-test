import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import SearchABook from './searchABook';
import styled from "styled-components";
import onScroll from '../../Utils/onScroll'

const Container = styled.ul`
    border-top: 1px solid #ddd;
    padding: 0 8rem;
    padding-top: 10rem;
`;

const searchResultList = () => {

    const { search } = useParams();
    const { searchResultBooks, isLoadging, hasMoreSearchBooks, offset } = useSelector(state => state.books);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: INIT_BOOKS });
        dispatch({ type: SEARCH_BOOK_REQUEST, payload: { search, offset } })
    }, [search])

    useEffect(() => {
        if (!hasMoreSearchBooks || isLoadging) return null;
        window.addEventListener('scroll', () => {
            onScroll() && dispatch({ type: SEARCH_BOOK_REQUEST, payload: { search, offset } })
        });
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [isLoadging])
    return (
        <Container>
            {searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.bookTitle} author={book.bookWriter} image={book.bookImage} pubdate={book.bookPublishYear} isbn={book.bookIsbn} />
                )
            })}
        </Container>
    );
};

export default searchResultList