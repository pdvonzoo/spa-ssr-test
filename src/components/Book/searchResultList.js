import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import SearchABook from './searchABook';
import styled from "styled-components";

const Container = styled.ul`
    margin-top: 5rem;
    padding: 0 8rem;
`;

const searchResultList = () => {

    const { searchResultBooks, searchText, isLoadging, hasMoreSearchBooks } = useSelector(state => state.books);
    const dispatch = useDispatch();

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 280) {
            if (hasMoreSearchBooks) {
                const data = {
                    search: searchText,
                    offset: searchResultBooks.length
                }
                dispatch({ type: SEARCH_BOOK_REQUEST, data })
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [searchResultBooks.length, hasMoreSearchBooks])


    return (
        <Container>
            {/* {isLoadging && <h1>로딩 중......</h1>} */}
            {searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.title} author={book.author} image={book.image} pubdate={book.pubdate} isbn={book.isbn} />
                )
            })}
        </Container>
    );
};

export default searchResultList;