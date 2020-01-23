import React from "react";
import styled from "styled-components";
import SignUpComponent from '../components/User/SignUpComponent'
import SignInComponent from "../components/User/SignInComponent";
import Layout from "../components/common/Layout";

const AuthForm = styled.div`
  display: flex;
  padding: 3rem 3rem 0;
  background-color: #e4e4e4;
  height: 100%;
`;

export default () => (
  <Layout title="로그인, 회원가입 페이지" description="">
    <AuthForm>
      <SignInComponent />
      <SignUpComponent />
    </AuthForm>
  </Layout>
);