import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST } from '../../modules/books'
import { Link } from 'react-router-dom';
import { isBlank } from '../../Utils/valid'
const SearchContainer = styled.form`
    padding: 1rem 0;
    text-align: center;
    background-color: #fff;
`;
const SearchForm = styled.input`
    border: none;
    font-family: Chivo,sans-serif;
    font-size: 1.3rem;
    margin: 0 .5rem;
    padding: 1rem;
    min-width: 26rem;
`;
const SearchBtn = styled.button`
    margin: 0 5px;
    padding: .5rem 1.5rem;
    border: 0px;
    font-size: 1.3rem;
    background: #ea541e;
    color: #fff;
`;

export default () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('')
    const onChangeSearchBar = useCallback((e) => {
        setSearch(e.target.value)
    }, [search])

    const searchSubmit = useCallback(() => {
        console.log("ㅅㅣㄹ행")
        if (!isBlank(search)) {
            return alert("한글자 이상이어야 합니다.")
        }
        const data = {
            search: search,
            offset: 0
        }
        dispatch({ type: SEARCH_BOOK_REQUEST, data })
        setSearch('');
    }, [search])
    return <SearchContainer onSubmit={searchSubmit}>
        <SearchForm type="search" onChange={onChangeSearchBar} value={search} placeholder="What are you searching for?" />
        <Link to={`/search/${search}`}>
            <SearchBtn onClick={searchSubmit}>GO</SearchBtn>
        </Link>
    </SearchContainer >


}