import React from "react";
import styled from "styled-components";

const StyledFormGroup = styled.div`
  margin-bottom: 1rem;
`;

export default ({ children }) => <StyledFormGroup>{children}</StyledFormGroup>;