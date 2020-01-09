import React from "react";
import styled from "styled-components";


const ListBox = styled.ul`
  margin: 0 2rem .5rem 2rem;
  border-bottom: 1px solid #333;
`;
const ListItem = styled.li`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export default ({ book }) => {
    const { name, count, date } = book;
    return <>
        <ListBox>
            <ListItem>책 이름 : {name}</ListItem>
            <ListItem>총 권수 {count}</ListItem>
            <ListItem>입고 날짜 {date}</ListItem>
        </ListBox>
        <ListBox>
            <button>추가</button>
            <button>제거</button>
            <button>수정</button>
            <button>반납현황</button>
        </ListBox>
    </>
}

