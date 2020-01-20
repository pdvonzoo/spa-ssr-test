import React, { useEffect } from 'react';
import styled from "styled-components";
import RentList from '../components/Book/RentList';


const Container = styled.div`
  margin: 5rem 0;
`;

const MyBooksPage = () => {
    return (
        <Container>
            <h2>대여 목록</h2>
            <RentList />
        </Container>
    );
};

export default MyBooksPage;