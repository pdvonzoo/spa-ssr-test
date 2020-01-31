import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../auth";
import { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn, Heading2, ErrorMessage } from "./StyledAuthComponent";

import { isEmail, isJobPassword } from '../../Utils/valid'
import BigHr from "../common/BigHr";

const SignInComponent = () => {
  const [values, setValues] = useState({
    memberEmail: "",
    memberPassword: "",
    error: "",
    loading: false,
    redirectToRefferrer: false
  });
  const { memberEmail, memberPassword, loading, error, redirectToRefferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    if (!isEmail(memberEmail)) {
      return setValues({ ...values, memberEmail: '', memberPassword: '', error: "이메일 형식이 올바르지 않습니다....", loading: false })
      // return alert("이메일 형식이 올바르지 않습니다....")
    }
    if (!isJobPassword(memberPassword)) {
      return setValues({ ...values, memberEmail: '', memberPassword: '', error: "비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.", loading: false })
      // return alert("비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.")
    }


    signin({ memberEmail, memberPassword }).then(data => {
      if (data.message) {
        setValues({ ...values, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToRefferrer: true
          });
        });
      }
    });
  };

  const signInForm = () => (
    <AuthContainer onSubmit={clickSubmit}>
      <Heading2>Login</Heading2>
      <BigHr></BigHr>
      <FormGroup>
        <AuthLabel>Email</AuthLabel>
        <AuthTextInput
          onChange={handleChange("memberEmail")}
          type="email"
          className="form-control"
          value={memberEmail}
        />
      </FormGroup>
      <FormGroup>
        <AuthLabel>Password</AuthLabel>
        <AuthTextInput
          onChange={handleChange("memberPassword")}
          type="password"
          className="form-control"
          value={memberPassword}
        />
      </FormGroup>
      <SubmitBtn onClick={clickSubmit}>
        Submit
      </SubmitBtn>
      {showError()}
    </AuthContainer>
  );

  const showError = () => (
    <ErrorMessage
      style={{ display: error ? "block" : "none" }}
    >
      {error}
    </ErrorMessage>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToRefferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <>
      {signInForm()}
      {showLoading()}
      {redirectUser()}
    </>
  );
};

export default SignInComponent;
