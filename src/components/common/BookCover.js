import React from "react";
import styled from "styled-components";

export default styled.div`
  opacity: .9;
  position: absolute;
  display: none;
  justify-content: center;
  align-items: middle;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(51,51,51,0.9);
  transition: opacity .25s cubic-bezier(.77,0,.175,1);
`;