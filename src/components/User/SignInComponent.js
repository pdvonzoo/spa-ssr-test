import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../../auth";
import { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn } from "../auth";

import { isEmail, isCelluar, isJobPassword } from '../../Utils/valid'

import { isLogged } from '../../modules/user';

const SignInComponent = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToRefferrer: false
  });

  const { email, password, loading, error, redirectToRefferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });

    if (!isEmail(email)) {
      setValues({ ...values, email: '', password: '', error: true, loading: false })
      return alert("이메일 형식이 올바르지 않습니다....")
    }

    if (!isJobPassword(password)) {
      setValues({ ...values, email: '', password: '', error: true, loading: false })
      return alert("비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.")
    }


    signin({ email, password }).then(data => {
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
      <FormGroup>
        <AuthLabel>Email</AuthLabel>
        <AuthTextInput
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </FormGroup>
      <FormGroup>
        <AuthLabel>Password</AuthLabel>
        <AuthTextInput
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
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
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
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
