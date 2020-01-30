import React, { useState } from 'react';
import styled from "styled-components";
import { pointColor } from '../components/common/colors';
import AdminList from '../components/Admin/AdminList';
import Layout from '../components/common/Layout';
import { useDispatch, useSelector } from 'react-redux'
import { ADMIN_BOOK_INIT } from '../modules/admin';
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
    border-bottom: ${props => props.view === 0 ? `1px solid rgb(51,51,51)` : "0px"}
  }
  &:nth-child(2){
    border-bottom: ${props => props.view === 1 ? `1px solid rgb(51,51,51)` : "0px"}
  }
  &:nth-child(3){
    border-bottom: ${props => props.view === 2 ? `1px solid rgb(51,51,51)` : "0px"}
  }
`;


export default () => {
  const dispatch = useDispatch();

  const [view, setView] = useState(0)

  const searchView = () => {
    dispatch({ type: ADMIN_BOOK_INIT })
    setView(0)
  }
  const setBooksView = () => {
    dispatch({ type: ADMIN_BOOK_INIT })
    setView(1)
  }
  const setHavingView = () => {
    dispatch({ type: ADMIN_BOOK_INIT })
    setView(2);
  }
  return (
    <Layout title="관리자 페이지" description="">
      <Container>
        <Nav>
          <NavItem onClick={searchView} view={view}>회원별 대여 기록</NavItem>
          <NavItem onClick={setBooksView} view={view}>추가할 도서 검색</NavItem>
          <NavItem onClick={setHavingView} view={view}>사내 보유 도서 검색</NavItem>
        </Nav>
        <AdminList view={view} />
      </Container>
    </Layout>
  );
};