import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { SEARCH_BOOK_REQUEST, INIT_BOOKS } from '../../modules/books'
import { Link, useParams } from 'react-router-dom';
import { isBlank } from '../../Utils/valid'
import { pointColor } from "../common/colors";
import { getBookKeyWord, getAutoComplete } from '../../api/book'
import SearchListTemplate from "./SearchListTemplate";
import useDebounce from "../../Utils/useDebounce";
import parse from 'html-react-parser';

const SearchContainer = styled.form`
    display: flex;
    margin: 1rem 0;
    height: 3rem;
    text-align: center;
    background-color: #fff;
    justify-content: center;
`;

const SearchInputWrapper = styled.div`
    position: relative;
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
    const { search } = useParams();
    const [dataLength, setDataLength] = useState(0);
    const [counter, setCounter] = useState(0);
    const [template, setTemplate] = useState(null);
    const [useInput, setUserInput] = useState('')

    const debouncedSearchTerm = useDebounce(useInput, 100);

    useEffect(() => {
        setDataLength(0);
        setCounter(0);
        setTemplate(null);
    }, [search]);

    useEffect(
        () => {
            if (counter > 0) return;
            if (debouncedSearchTerm) {
                getAutoComplete(useInput).then(result => {
                    setTemplate([useInput, ...result.data]);
                    setDataLength(parseInt(result.data.length))
                });

            } else {
                setTemplate([]);
            }
        },
        [debouncedSearchTerm]
    );

    const onKeyDownEvent = (e) => {
        if (e.keyCode === 40) {

            if (counter == 0) {
                let searchValue = parse(template[counter + 1]);
                if (toString.call(searchValue) === "[object Array]") {
                    searchValue = searchValue
                        .map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
                        .join("");
                }
                setUserInput(searchValue)
                setCounter(counter + 1);
                return;
            }

            if (counter < dataLength) {
                let searchValue = parse(template[counter + 1]);
                if (toString.call(searchValue) === "[object Array]") {
                    searchValue = searchValue
                        .map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
                        .join("");
                }
                setUserInput(searchValue)
                setCounter(counter + 1);
            }
        } else if (e.keyCode === 38) {

            if (counter > 0) {
                let searchValue = parse(template[counter - 1]);
                if (toString.call(searchValue) === "[object Array]") {
                    searchValue = searchValue
                        .map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
                        .join("");
                }
                setUserInput(searchValue);
                setCounter(counter - 1);
            }
        }
    }

    return <SearchContainer >
        <SearchInputWrapper>
            <SearchForm
                type="search"
                onKeyDown={onKeyDownEvent}
                onChange={e => setUserInput(e.target.value)}
                value={useInput}
                placeholder="What are you searching for?" />

            <Link to={`/search/${useInput}`} replace>
                <SearchBtn>GO</SearchBtn>
            </Link>

            {template && <SearchListTemplate selectedId={counter} resultData={template.filter((t, i) => i !== 0)} setUserInput={setUserInput} />}
        </SearchInputWrapper>
    </SearchContainer>
}



