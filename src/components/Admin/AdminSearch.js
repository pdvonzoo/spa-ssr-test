import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components";
import { pointColor } from '../common/colors';
import { SEARCH_ADMIN_USER_INFO_REQUEST, SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, SET_SEARCH, ADMIN_BOOK_INIT } from '../../modules/admin';

const Container = styled.form`
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
    @media (max-width: 600px) {
        margin-right: 1rem;
        min-width: 20rem;
    }
    @media (max-width: 500px) {
        margin-right: .7rem;
        min-width: 15rem;
    }
    
`;
const SearchBtn = styled.button`
    border: 0;
    height: 100%;
    background-color: ${pointColor};
    border-radius: 0;
    padding: .3rem 1.3rem;
    font-size: 1rem;
    @media (max-width: 600px) {
        padding: .3rem 1.2rem;
        font-size: 1.1rem;
    }
`;


export default ({ view }) => {
    const dispatch = useDispatch();
    const [search, setSaerch] = useState('')
    const { offset } = useSelector(state => state.admin)

    const submitBtton = useCallback((e) => {
        e.preventDefault();
    }, [search])

    const onChangeSearch = useCallback((e) => {
        setSaerch(e.target.value)

    }, [search])

    const getAdminUserInfo = useCallback(() => {
        dispatch({ type: ADMIN_BOOK_INIT })
        dispatch({ type: SEARCH_ADMIN_USER_INFO_REQUEST, payload: search });
        setSaerch('')
    }, [search])

    const getAdminExternalBooks = useCallback(() => {
        dispatch({ type: ADMIN_BOOK_INIT })
        dispatch({ type: SEARCH_ADMIN_EXTERNAL_BOOKS_REQUEST, payload: { search, offset: 0 } })
        setSaerch('')
    }, [search]);

    const getAdminInHouseBooks = useCallback(() => {
        dispatch({ type: ADMIN_BOOK_INIT })
        dispatch({ type: SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, payload: { search, offset: 0 } })
        setSaerch('')
    }, [search])

    const datas = [getAdminUserInfo, getAdminExternalBooks, getAdminInHouseBooks]
    return (
        <Container onSubmit={submitBtton}>
            <SearchInput type="text" onChange={onChangeSearch} value={search} placeholder="궁금 하신 책 또는 회원의 이름을 입력해주세요" />
            <SearchBtn onClick={datas[view]}>조회하기</SearchBtn>
        </Container>
    );
};