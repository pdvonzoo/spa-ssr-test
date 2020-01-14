import React, { useState, useEffect } from "react";
import Layout from "../components/common/Layout";
import Data from "../components/Book/data.json";
import BookList from "../components/Book/BookList";
import styled from "styled-components";
import Search from "../components/Search/Search";

const HomeConatainer = styled.div`
  padding-top: 10rem;
  height: 100%;
`;

export default () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    setDatas(Data.books);
  }, []);

  return <>
    <Search />
    <HomeConatainer>
      <BookList datas={datas} />
    </HomeConatainer>
  </>;
};
