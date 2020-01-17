import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux'
import styled from "styled-components";
import { pointColor } from '../common/colors';
import { SEARCH_ADMIN_USER_REQUEST, SEARCH_ADMIN_NAVER_BOOKS_REQUEST } from '../../modules/admin';

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 3rem 0;
    height: 3rem;    
`;
const SearchInput = styled.input`
    height: 100%;
    min-width: 26rem;
    margin-right: 1.5rem;
    border: 0;
    border-bottom: 1px solid #040404;
    display: inherit;
`;
const SearchBtn = styled.button`
    border: 0;
    height: 100%;
    background-color: ${pointColor};
    border-radius: 2rem;
`;


const Search = ({ view }) => {
    const dispatch = useDispatch();
    const [search, setSaerch] = useState('')

    const onChangeSearch = useCallback((e) => {
        setSaerch(e.target.value)
        console.log(search)
    }, [search])

    const getBookFromNaverRepository = useCallback(() => {
        dispatch({ type: SEARCH_ADMIN_NAVER_BOOKS_REQUEST, payload: search })
        setSaerch('')
    });

    const getBooksFromRepository = useCallback(() => {
        dispatch({ type: SEARCH_ADMIN_USER_REQUEST, payload: search });
        setSaerch('')
    }, [search])
    return (
        <Container>
            <SearchInput type="text" onChange={onChangeSearch} value={search} placeholder="조회하고 싶은 도서를 입력하세요" />
            <SearchBtn onClick={view ? getBooksFromRepository : getBookFromNaverRepository}>책 조회하기</SearchBtn>
        </Container>
    );
};

export default Search;