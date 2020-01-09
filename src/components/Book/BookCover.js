import React from "react";
import styled from "styled-components";

const BookCoverContainer = styled.div`
    opacity: .9;
    position: absolute;
    display: none;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #133ba3;
    transition: opacity .25s cubic-bezier(.77,0,.175,1);
`;

export default () => {
    return <BookCoverContainer></BookCoverContainer>;
}