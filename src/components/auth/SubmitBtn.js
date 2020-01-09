import React from "react";
import styled from "styled-components";

const StyledSubmitBtn = styled.button`
  padding: .75rem 1rem;
  border: 0;
  color: #fff;
  background-color: #133ba3;
  
`;

export default ({ children, onClick }) => <StyledSubmitBtn onClick={onClick}>{children}</StyledSubmitBtn>