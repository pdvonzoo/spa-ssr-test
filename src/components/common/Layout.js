import React from "react";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { primaryColor } from "./colors";
import { isUser, isAdmin, signout } from "../../auth";

const Header = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
  background-color: ${primaryColor};
`;

const BaseItem = styled(Link)`
  margin-left: 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  
`;

const SignOutBtn = styled.button`
  display: inline-block;
  color: #fff;
  width: 100%;
  height: 100%;
  border: 0;
  background: inherit;
`;

const Layout = ({ children, title, description }) => {
  // const { isLogged } = useSelector(state => state.user)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header>
        <BaseItem to={{ pathname: "/" }}>Logo</BaseItem>
        {isUser() && <>
          <BaseItem to={{ pathname: "/myBooksRoom" }}>My Page</BaseItem>
          <BaseItem to="/"><SignOutBtn onClick={signout}>logout</SignOutBtn></BaseItem>
        </>}
        {!isUser() &&
          <BaseItem to={{ pathname: "/auth" }}>sign in/sign up</BaseItem>}
        {isAdmin() &&
          <BaseItem to={{ pathname: "/admin" }}> admin</BaseItem>}

        {/* <BaseItem to={{ pathname: "/error" }}>Error</BaseItem> */}
      </Header>
      {children}
    </>
  );
};

export default Layout;
