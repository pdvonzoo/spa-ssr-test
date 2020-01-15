import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import SearchABook from './searchABook';
import styled from "styled-components";
import { withRouter } from 'react-router-dom'

const Container = styled.ul`
    border-top: 1px solid #ddd;
    padding: 0 8rem;
    padding-top: 10rem;
`;

const searchResultList = ({ location, urlPath }) => {
    const searchResult = location;
    const { searchResultBooks, searchText, isLoadging, hasMoreSearchBooks } = useSelector(state => state.books);
    const dispatch = useDispatch();
    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasMoreSearchBooks) {
                const data = {
                    search: searchText,
                    offset: searchResultBooks.length
                }
                dispatch({ type: SEARCH_BOOK_REQUEST, payload: data })
            }
        }
    }

    useEffect(() => {
        console.log(searchResult)
        console.log('테스트 해봅니다', urlPath)
        const data = {
            search: searchText,
            offset: searchResultBooks.length
        }
        dispatch({ type: SEARCH_BOOK_REQUEST, payload: data })
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [searchResultBooks.length, hasMoreSearchBooks])
    return (
        <Container>
            {searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.title} author={book.author} image={book.image} pubdate={book.pubdate} isbn={book.isbn} />
                )
            })}
        </Container>
    );
};

export default withRouter(searchResultList)