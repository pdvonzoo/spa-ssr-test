import React from 'react';
import SearchResultList from '../components/Book/searchResultList';
import Search from '../components/Search/Search';

const SearchPage = () => {
    return (
        <>
            <Search />
            <SearchResultList />
        </>
    );
}
export default SearchPage;