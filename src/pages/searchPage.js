import React from 'react';
import SearchResultList from '../components/Book/searchResultList';
import Search from '../components/Search/Search';

const searchPage = () => {
    return (
        <>
            <Search />
            <SearchResultList />
        </>
    );
}
export default searchPage;