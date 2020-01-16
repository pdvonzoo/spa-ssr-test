import React, { useState, useCallback } from "react";
import RentList from "../components/Book/RentList";
import styled from "styled-components";

const Container = styled.div`
  margin: 5rem 0;
`;

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
    <Container>
      <h2>대여 목록</h2>
      <RentList />
    </Container>
  );
};

export default UserHistory;
