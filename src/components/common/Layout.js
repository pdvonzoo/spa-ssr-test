import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Search from "../Search/Search";
import { primaryColor } from "./colors";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${primaryColor};
`;

const BaseItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
`;

const Layout = () => {
  return (
    <>
      <Header>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/" }}>Logo</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/auth" }}>sign in/sign up</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/myBooksRoom" }}>My</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/error" }}>Error</BaseItem>
        <BaseItem style={{ marginLeft: '10px' }} to={{ pathname: "/admin" }}> admin</BaseItem>
      </Header>
    </>
  );
};

export default Layout;
