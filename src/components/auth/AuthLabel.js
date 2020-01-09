import React from "react";
import styled from "styled-components";

const StyledAuthLabel = styled.label`
  color: #133ba3;
  display: flex;
  font-weight: 700;
  margin-bottom: .3rem;
  min-height: 20px;
`;

export default ({ children }) => <StyledAuthLabel>{children}</StyledAuthLabel>