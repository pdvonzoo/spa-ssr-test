import React, { useState } from 'react';

import styled from "styled-components";
import { pointColor } from '../components/common/colors';
import Search from '../components/adminUser/Search';
import ExternalsBooks from '../components/adminUser/AdminContainers/ExternalsBooks';
import InhouseBooks from '../components/adminUser/AdminContainers/InhouseBooks';
import UserInfo from '../components/adminUser/AdminContainers/UserInfo';


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
    border-bottom: ${props => props.view === 0 ? `1px solid ${pointColor}` : "0px"}
  }
  &:nth-child(2){
    border-bottom: ${props => props.view === 1 ? `1px solid ${pointColor}` : "0px"}
  }
  &:nth-child(3){
    border-bottom: ${props => props.view === 2 ? `1px solid ${pointColor}` : "0px"}
  }
`;


const Admin = () => {
  const [view, setView] = useState(1)

  const searchView = () => {
    setView(0)
  }
  const setBooksView = () => {
    setView(1)
  }
  const setHavingView = () => {
    setView(2);
  }
  const views = [<UserInfo />, <ExternalsBooks />, <InhouseBooks />]
  return (
    <Container>
      <Nav>
        <NavItem onClick={searchView} view={view}>회원별 대여 기록</NavItem>
        <NavItem onClick={setBooksView} view={view}>추가할 도서 검색</NavItem>
        <NavItem onClick={setHavingView} view={view}>사내 보유 도서 검색</NavItem>
      </Nav>
      <Search view={view} />
      {views[view]}
    </Container>
  );
};

export default Admin;