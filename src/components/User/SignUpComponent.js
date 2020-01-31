import React, { useState } from "react";
import { signup } from "../../auth";
import { isEmail, isJobPassword } from '../../Utils/valid'
import { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn, Heading2, ErrorMessage } from "./StyledAuthComponent";
import BigHr from "../common/BigHr";

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
      return setValues({ ...values, memberEmail: '', error: "이메일 형식이 올바르지 않습니다...." })
      return alert("이메일 형식이 올바르지 않습니다....")
    }
    if (!isJobPassword(memberPassword)) {
      return setValues({ ...values, memberPassword: '', error: "비밀번호는  8 ~ 10자 영문, 숫자 조합의 형식이어야 합니다." })
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
      <Heading2>Register</Heading2>
      <BigHr></BigHr>
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
      {showError()}
    </AuthContainer>
  );

  const showError = () => (
    <ErrorMessage
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </ErrorMessage>
  );

  return (
    <>
      {signUpForm()}
    </>
  );
};

export default SignUpComponent;
