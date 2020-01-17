import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import { Link } from 'react-router-dom';
import { isBlank } from '../../Utils/valid'
import { pointColor } from "../common/colors";
import Axios from "axios";
import { getBookKeyWord } from '../../api/book'
import SearchListTemplate from "./SearchListTemplate";

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
    const [template, setTemplate] = useState(null);
    const [search, setSearch] = useState('')
    const onChangeSearchBar = useCallback(async (e) => {
        setSearch(e.target.value)
        const result = await getBookKeyWord(e.target.value);
        console.log("받은 데이터 : ", result)
        setTemplate(result.data);
    }, [search])
    const onClickEvent = (da) => {
        setSearch(da);
    }
    return <SearchContainer >
        <SearchForm type="search" onChange={onChangeSearchBar} value={search} placeholder="What are you searching for?" />
        <Link to={`/search/${search}`} replace >
            <SearchBtn>GO</SearchBtn>
        </Link>


        {template && <SearchListTemplate resultData={template} setSearch={setSearch} />}
    </SearchContainer>
}



