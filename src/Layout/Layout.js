import React from "react";
import { Link } from "react-router-dom";
import Search from "../core/Search";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to={{ pathname: "/" }}>Logo</Link>
        <Link to={{ pathname: "/signup" }}>sign up</Link>
        <Link to={{ pathname: "/signup" }}>sign up</Link>
        <Link to={{ pathname: "/userhistory" }}>My</Link>
        <Link to={{ pathname: "/admin" }}> admin</Link>
        <Search />
      </header>
      {children}
    </>
  );
};

export default Layout;
