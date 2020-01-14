import React from "react";
import styled from "styled-components";
import { primaryColor } from "../common/colors";

const StyledSubmitBtn = styled.button`
  padding: .75rem 1rem;
  border: 0;
  color: #fff;
  background-color: ${primaryColor};
`;

export default ({ children, onClick }) => <StyledSubmitBtn onClick={onClick}>{children}</StyledSubmitBtn>