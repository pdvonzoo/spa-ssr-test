import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import { SEARCH_A_BOOK_REQUEST } from '../../modules/admin'
import { Link } from 'react-router-dom';
import { isBlank } from '../../Utils/valid'
import { pointColor } from "../common/colors";

const SearchContainer = styled.form`
    display: flex;
    margin: 1rem 0;
    height: 3rem;
    text-align: center;
    background-color: #fff;
    justify-content: center;
`;
const SearchForm = styled.input`
    border: none;
    font-family: Chivo,sans-serif;
    font-size: 1.3rem;
    border: 0;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid rgb(51, 51, 51);
    margin-top: -1px;
    margin-right: 1.5rem;
    padding-left: 0.5rem;
    min-width: 26rem;
    height: 100%;
    box-sizing: border-box;
`;
const SearchBtn = styled.button`
    margin: 0 5px;
    padding: .5rem 1.5rem;
    height: 100%;
    border: 0px;
    font-size: 1.3rem;
    background: ${pointColor};
    color: #040404;
    border-radius: 2rem;
`;

export default () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState('')

    const onChangeSearchBar = useCallback((e) => {
        setSearch(e.target.value)
    }, [search])

    const searchSubmit = useCallback(() => {
        if (!isBlank(search)) {
            return alert("한글자 이상이어야 합니다.")
        }
        const data = {
            search: search,
            offset: 0
        }
        dispatch({ type: INIT_BOOKS });
        dispatch({ type: SEARCH_BOOK_REQUEST, payload: data })
        console.log("첫 디스패치")

        setSearch('');
    }, [search])
    return <SearchContainer onSubmit={searchSubmit}>
        <SearchForm type="search" onChange={onChangeSearchBar} value={search} placeholder="What are you searching for?" />
        <Link to={`/search/${search}`}>
            <SearchBtn onClick={searchSubmit}>GO</SearchBtn>
        </Link>
    </SearchContainer >


}