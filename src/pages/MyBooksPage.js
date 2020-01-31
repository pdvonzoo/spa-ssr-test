import React, { useEffect } from 'react';
import styled from "styled-components";
import RentList from '../components/Book/RentList';
import Layout from '../components/common/Layout';


const Container = styled.div`
    width: 70%;
    margin: 5rem auto;
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 768px) {
        margin: 4rem auto;
        width: 85%;
    }
    @media (max-width: 600px) {
        margin: 3rem auto;
        width: 90%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Heading2 = styled.h2`
    width: 70%;
    margin: 2rem 0;
    font-size: 1.4rem;
    font-weight: bold;
`;

const MyBooksPage = () => (
    <Layout title="마이페이지" description="">
        <Container>
            <Heading2>현대 대여 목록</Heading2>
            <RentList status="current" />
            <Heading2>유저 히스토리</Heading2>
            <RentList status="total" />
        </Container>
    </Layout>
);

export default MyBooksPage;