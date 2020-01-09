import React from "react";
import styled from "styled-components";
import SignUpComponent from '../components/User/SignUpComponent'
import SignInComponent from "../components/User/SignInComponent";

const AuthForm = styled.div`
  display: flex;
  padding: 3rem 3rem 0;
  background-color: #e4e4e4;
  height: 100%;
`;

const Signup = () => {
  return (
    <AuthForm>
      <SignInComponent />
      <SignUpComponent />
    </AuthForm>
  );
};

export default Signup;
