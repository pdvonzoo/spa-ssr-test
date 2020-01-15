import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_BOOK_REQUEST, UPDATE_BOOK_REQUEST } from '../../modules/admin'
import styled from "styled-components";
import { pointColor } from '../common/colors';

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border: 1px solid #040404;
    margin: auto;
    margin-bottom: -1px;
`;

const TextContainer = styled.div`
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: baseline;
`;

const Heading2 = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
`;
const Param = styled.p`
    font-size: 1.2rem;
`;
const Btn = styled.button`
    margin-left: 1rem;
    padding: .4rem .8rem;
    border: 0;
    border-radius: 2rem;
    background-color: ${pointColor};
`;
const AdminGetBooks = () => {

    const dispatch = useDispatch();
    const { hasBooks } = useSelector(state => state.admin)

    const updataBookFromRepository = useCallback((isbn) => {
        console.log('updataBookFromRepository', isbn)
        dispatch({ type: UPDATE_BOOK_REQUEST, data: isbn }) //isbn
    }, [hasBooks])

    const deleteBookFromRepository = useCallback((id) => {
        console.log('deleteBookFromRepository', id)
        dispatch({ type: DELETE_BOOK_REQUEST, data: id })//책 아이디
    }, [hasBooks])

    return (
        <>
            {hasBooks && hasBooks.map((book, index) => {
                return (
                    <Container key={index}>
                        <TextContainer>
                            <Heading2>책 이름 : {book.title}</Heading2>
                            <Param>책 저자 : {book.author}</Param>
                        </TextContainer>
                        <BtnContainer>
                            <Btn onClick={() => updataBookFromRepository(book.isbn10)}>수정하기</Btn>
                            <Btn onClick={() => deleteBookFromRepository(index)}>삭제하기</Btn>
                        </BtnContainer>
                    </Container>
                )
            })}
        </>
    );
};

export default AdminGetBooks;