import React from "react";
import { useDispatch } from "react-redux";
import BookList from "../components/Book/BookList";
import styled from "styled-components";
import Search from "../components/Search/Search";
import Layout from "../components/common/Layout";

const HomeConatainer = styled.div`
  padding-top: 10rem;
  min-height: 100%;
  background-color: #eee;
`;

export default () => (
  <Layout title="홈" description="">
    <Search />
    <HomeConatainer>
      <BookList />
    </HomeConatainer>
  </Layout>
);
