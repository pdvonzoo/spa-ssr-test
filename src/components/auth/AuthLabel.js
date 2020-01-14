import React from "react";
import styled from "styled-components";
import { primaryColor } from "../common/colors";

const StyledAuthLabel = styled.label`
  color: ${primaryColor};
  display: flex;
  font-weight: 700;
  margin-bottom: .3rem;
  min-height: 20px;
`;

export default ({ children }) => <StyledAuthLabel>{children}</StyledAuthLabel>