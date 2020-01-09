import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import SignInComponent from '../components/User/SignInComponent.js';
import SignUpComponent from "../components/User/SignUpComponent.js";

const Signin = () => {
  return (
    <>
      <SignInComponent />
      <SignUpComponent />
    </>
  );
};

export default Signin;
