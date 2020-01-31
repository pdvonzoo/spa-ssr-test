import React from "react";
import styled from "styled-components";
import SignUpComponent from '../components/User/SignUpComponent'
import SignInComponent from "../components/User/SignInComponent";
import Layout from "../components/common/Layout";

const AuthForm = styled.div`
  display: flex;
  padding: 4rem 4rem 0;
  background-color: #eee;
  height: 100%;
  @media (max-width: 768px) {
    display: block;
    padding: 2rem 2rem 0;
  }
`;

export default () => (
  <Layout title="로그인, 회원가입 페이지" description="">
    <AuthForm>
      <SignInComponent />
      <SignUpComponent />
    </AuthForm>
  </Layout>
);