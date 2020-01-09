import React from "react";
import styled from "styled-components";

const StyledAuthContainer = styled.form`
  flex: 0 0 50%;
  max-width: 50%;
  padding: 0 1.5rem;
`;

export default ({ children, onSubmit }) => <StyledAuthContainer onSubmit={onSubmit}>{children}</StyledAuthContainer>;