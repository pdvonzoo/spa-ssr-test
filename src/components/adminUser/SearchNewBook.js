import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_ADMIN_HAVING_BOOK_REQUEST } from '../../modules/admin';
const SearchNewBook = () => {
    const dispatch = useDispatch();
    const [search, setSaerch] = useState('')
    const onChangeSearch = useCallback((e) => {
        setSaerch(e.target.value)
        console.log(search)
    }, [search])

    const getBooksFromRepository = useCallback(() => {
        console.log('getBooksFromRespository')
        dispatch({ type: SEARCH_ADMIN_HAVING_BOOK_REQUEST, payload: search });
        setSaerch('')
    }, [search])

    return (
        <>
            <input type="text" onChange={onChangeSearch} value={search} placeholder="조회하고 싶은 도서를 입력하세요" />
            <button onClick={getBooksFromRepository}>책 조회하기</button>
        </>
    );
};

export default SearchNewBook;