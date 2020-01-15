import React, { useState } from 'react';
import AdminGetBooks from '../components/adminUser/AdminGetBooks';
import AdminSearch from '../components/adminUser/AdminSearch';
import styled from "styled-components";
import { pointColor } from '../components/common/colors';
import Search from '../components/adminUser/Search';

const Container = styled.div`
  margin: 5rem 0;
`;
const Nav = styled.ul`
  display: flex;  
  justify-content: center;
`;
const NavItem = styled.li`
  margin: 0 2rem;
  padding-bottom: 0.5rem;
  font-size: 1.3rem;
  cursor: pointer;
  &:nth-child(1){
    border-bottom: ${props => props.view ? `1px solid ${pointColor}` : "0px"}
  }
  &:nth-child(2){
    border-bottom: ${props => !props.view ? `1px solid ${pointColor}` : "0px"}
  }
`;


const Admin = () => {
  const [view, setView] = useState(true)
  const searchView = () => {
    setView(true)
  }
  const getBooksView = () => {
    setView(false)
  }
  return (
    <Container>
      <Nav>
        <NavItem onClick={searchView} view={view}>회원별 대여 기록</NavItem>
        <NavItem onClick={getBooksView} view={view}>사내 보유 도서 검색</NavItem>
      </Nav>
      <Search />
      {view ? <AdminSearch /> : <AdminGetBooks />}
    </Container>
  );
};

export default Admin;