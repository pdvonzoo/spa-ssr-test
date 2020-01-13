import React, { useState, useCallback, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "../components/common/Layout";
import RentList from "../components/Book/RentList";
import UserBooks from "../components/Book/UserBooks";
import { useSelector } from 'react-redux'
const UserHistory = () => {
  const [clickPage, setClickPage] = useState("1");

  const { isLogged } = useSelector(state => state.user)
  useEffect(() => {

  }, [isLogged])

  if (!isLogged) {
    return null;
  }

  const changePage = useCallback(
    e => {
      console.log(e.target.value);
      return e.target.value === "1" ? setClickPage("1") : setClickPage("2");
    },
    [clickPage]
  );

  return (
    <>

      <RentList />
    </>
  );
};

export default UserHistory;
