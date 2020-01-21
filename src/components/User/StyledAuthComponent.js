import styled from "styled-components";
import { primaryColor } from "../common/colors";

const AuthContainer = styled.form`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 1.5rem;
`;

const AuthLabel = styled.label`
  color: ${primaryColor};
  display: flex;
  font-weight: 700;
  margin-bottom: .3rem;
  min-height: 20px;
`;

const AuthTextInput = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 10px;
  border: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const SubmitBtn = styled.button`
  padding: .75rem 1rem;
  border: 0;
  color: #fff;
  background-color: ${primaryColor};
`;

export { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn };