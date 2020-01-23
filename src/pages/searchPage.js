import React from 'react';
import SearchResultList from '../components/Book/searchResultList';
import Search from '../components/Search/Search';
import Layout from '../components/common/Layout';

export default () => {
    return (
        <Layout title="검색결과페이지" description="">
            <Search />
            <SearchResultList />
        </Layout>
    );
}