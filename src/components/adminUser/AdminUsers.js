import React from "react";
import { users } from "./adminMock";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 1rem;
`;

const ListBox = styled.ul`
  margin: 0 2rem .5rem 2rem;
  border-bottom: 1px solid #333;
`;
const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export default () => {
  return (
    <Container>
      {users &&
        users.map((val, ind) => (
          <ListBox>
            <ListItem>이름 : {val.name}</ListItem>
            <ListItem>빌린 횟수 : {val.count}</ListItem>
          </ListBox>
        ))}
    </Container>
  );
};

