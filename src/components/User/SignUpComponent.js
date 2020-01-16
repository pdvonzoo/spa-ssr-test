import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../auth";
import { isEmail, isCelluar, isJobPassword } from '../../Utils/valid'
import { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn } from "../auth";

const SignUpComponent = () => {
  const [values, setValues] = useState({
    memberEmail: "",
    memberPassword: "",
    error: "",
    success: false
  });

  const { memberEmail, memberPassword, success, error } = values;

  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = event => {
    event.preventDefault();
    setValues({ ...values, error: false });

    if (!isEmail(memberEmail)) {
      setValues({ ...values, memberEmail: '', })
      return alert("이메일 형식이 올바르지 않습니다....")
    }
    if (!isJobPassword(memberPassword)) {
      setValues({ ...values, memberPassword: '', })
      return alert("비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다.")
    }

    signup({ memberEmail, memberPassword }).then(data => {
      if (data.error || data.err) {
        setValues({ ...values, error: data.error || data.err, success: false });
      } else {
        setValues({
          ...values,
          memberEmail: "",
          memberPassword: "",
          error: "",
          success: true
        });
      }
    });
  };

  const signUpForm = () => (
    <AuthContainer>
      회원가입
      <FormGroup>
        <AuthLabel className="text-muted">Email</AuthLabel>
        <AuthTextInput
          onChange={handleChange("memberEmail")}
          type="email"
          className="form-control"
          value={memberEmail}
        />
      </FormGroup>
      <FormGroup>
        <AuthLabel className="text-muted">Password</AuthLabel>
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
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please signin <Link to="/signin">Sign In</Link>
    </div>
  );

  return (
    <>
      {showError()}
      {showSuccess()}
      {signUpForm()}
    </>
  );
};

export default SignUpComponent;
