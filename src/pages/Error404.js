import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const type = keyframes`
    from{box-shadow: inset -3px 0px 0px #888;}
    to{box-shadow: inset -3px 0px 0px transparent;}
`;

const Heading2 = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 5rem;
    display: inline-block;
    padding-right: 12px;
    animation: ${type} .5s alternate infinite;
`;


export default () => {
    return <Container>
        <Heading2>404 Error</Heading2>
    </Container>
}