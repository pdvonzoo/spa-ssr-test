import React, { useState, useCallback } from "react";

import Layout from "../components/common/Layout";
import RentList from "../components/Book/RentList";
import UserBooks from "../components/Book/UserBooks";
const UserHistory = () => {
  const [clickPage, setClickPage] = useState("1");

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
