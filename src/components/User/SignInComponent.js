import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../auth";
import { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn } from "../auth";

import { isEmail, isCelluar, isJobPassword } from '../../Utils/valid'

import { isLogged } from '../../modules/user';

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
      setValues({ ...values, memberEmail: '', memberPassword: '', error: true, loading: false })
      return alert("이메일 형식이 올바르지 않습니다....")
    }

    if (!isJobPassword(memberPassword)) {
      setValues({ ...values, memberEmail: '', memberPassword: '', error: true, loading: false })
      return alert("비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.")
    }


    signin({ memberEmail, memberPassword }).then(data => {
      if (data.error || data.err) {

        setValues({ ...values, error: data.error || data.err, loading: false });
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
      로그인
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
    </AuthContainer>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "block" : "none" }}
    >
      {error}
    </div>
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
      // if (user && user.role === 1) {
      //   return <Redirect to="/admin/dashboard" />;
      // } else {
      //   return <Redirect to="/user/dashboard" />;
      // }
    }
  };

  return (
    <>
      {showError()}
      {showLoading()}
      {signInForm()}
      {redirectUser()}
    </>
  );
};

export default SignInComponent;
