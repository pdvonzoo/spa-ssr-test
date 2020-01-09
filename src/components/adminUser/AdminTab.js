import React from "react";
import styled from "styled-components";

const Container = styled.ul`
    margin-top: 3rem;
    margin-left: 2rem;
    font-size: 0;
`;
const Box = styled.li`
    display: inline-block;
    margin-right: .5rem;
    padding: 1rem 2rem;
    font-size: 1.3rem;
    background-color: #333;
    color: #fff;
`;

export default ({ selector, setSelector }) => {
    const handleClick = e => {
        if (e.target.innerText === "Users") {
            setSelector(1);
        } else if (e.target.innerText === "Books") {
            setSelector(2);
        }
    }

    return <Container onClick={handleClick}>
        <Box>Users</Box>
        <Box>Books</Box>
    </Container>;
}