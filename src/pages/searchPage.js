import React from 'react';
import SearchResultList from '../components/Book/searchResultList';
import Search from '../components/Search/Search';

const searchPage = ({ match }) => {
    console.log(match.params.isbn)
    const urlParse = match.params.id;
    return (
        <>
            <Search />
            <SearchResultList urlPath={urlParse} />
        </>
    );
}
export default searchPage;