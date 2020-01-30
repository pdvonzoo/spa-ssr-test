import React, { useEffect } from 'react';
import styled from "styled-components";
import RentList from '../components/Book/RentList';
import Layout from '../components/common/Layout';


const Container = styled.div`
  margin: 5rem 0;
`;

const MyBooksPage = () => (
    <Layout title="마이페이지" description="">
        <Container>
            <h2>현대 대여 목록</h2>
            <RentList status="current" />
            <h2>유저 히스토리</h2>
            <RentList status="total" />
        </Container>
    </Layout>
);

export default MyBooksPage;