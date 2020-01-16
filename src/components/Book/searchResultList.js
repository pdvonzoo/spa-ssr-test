import React, { useCallback, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import SearchABook from './searchABook';
import styled from "styled-components";
// import { withRouter } from 'react-router-dom'

const Container = styled.ul`
    border-top: 1px solid #ddd;
    padding: 0 8rem;
    padding-top: 10rem;
`;

const searchResultList = () => {

    const { id } = useParams();
    const { searchResultBooks, isLoadging, hasMoreSearchBooks, pageNumber } = useSelector(state => state.books);
    const dispatch = useDispatch();

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasMoreSearchBooks && !isLoadging) {
                const data = {
                    search: id,
                    offset: pageNumber
                }
                dispatch({ type: SEARCH_BOOK_REQUEST, payload: data })
            }
        }
    }

    useEffect(() => {
        dispatch({ type: INIT_BOOKS });
        const data = {
            search: id,
            offset: 0
        }
        dispatch({ type: SEARCH_BOOK_REQUEST, payload: data })
    }, [id])

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [isLoadging])
    return (
        <Container>
            {searchResultBooks.map((book, index) => {
                return (
                    <SearchABook key={index} title={book.booktitle} author={book.bookWriter} image={book.bookImage} pubdate={book.bookPublishYear} isbn={book.bookIsbn} />
                )
            })}
        </Container>
    );
};

export default searchResultList