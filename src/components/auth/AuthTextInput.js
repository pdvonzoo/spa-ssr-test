import React from "react";
import styled from "styled-components";

const StyledAuthTextInput = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 10px;
  border: 0;
`;


export default ({ children, onChange, type, className, value }) => {
    return <StyledAuthTextInput
        onChange={onChange}
        type={type}
        className={className}
        value={value}>{children}</StyledAuthTextInput>
}