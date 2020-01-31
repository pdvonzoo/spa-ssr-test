import styled from "styled-components";
import { primaryColor } from "../common/colors";

const AuthContainer = styled.form`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 1.5rem;
  @media (max-width: 768px) {
    display: block;
    max-width: unset;
    margin-bottom: 5rem;
  }
`;

const AuthLabel = styled.label`
  color: ${primaryColor};
  display: flex;
  font-weight: 700;
  margin-bottom: .3rem;
  min-height: 20px;
`;

const AuthTextInput = styled.input`
  padding-left: .5rem;
  width: 100%;
  height: 3rem;
  font-size: 1.1rem;
  border: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const SubmitBtn = styled.button`
  margin-top: 1rem;
  padding: .75rem 1rem;
  border: 0;
  color: #fff;
  background-color: ${primaryColor};
`;

const Heading2 = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const ErrorMessage = styled.p`
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: bold;
`;

export { AuthContainer, AuthLabel, AuthTextInput, FormGroup, SubmitBtn, Heading2, ErrorMessage };