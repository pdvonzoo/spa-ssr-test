import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DELETE_BOOK_REQUEST, UPDATE_BOOK_REQUEST } from '../../modules/admin'
import Search from './Search';
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
        <div>

            <Search />
            {hasBooks && hasBooks.map((book, index) => {
                return (
                    <div key={index}>
                        <p>
                            <p style={{ color: 'red', fontSize: '15px' }}>책 이름 : {book.title}</p>

                            <p style={{ color: "blue", fontSize: '15px' }}>책 저자 : {book.author}</p>
                            <p style={{ marginLeft: '10px', color: "green", fontSize: '15px' }}>   보유 수 : {index + 10}</p>
                        </p>

                        {/* <h1>책 설명</h1>

                        <textarea style={{ width: '800px', overflow: 'scroll', height: '400px' }} readonly>
                            {book.bookIntroContent}
                        </textarea>
                        <h1>목차</h1>
                        <div style={{ whiteSpace: "pre" }}>
                            {book.tableOfContentsContent}
                        </div> */}
                        <button onClick={() => updataBookFromRepository(book.isbn10)}>수정하기</button>
                        <button onClick={() => deleteBookFromRepository(index)}>삭제하기</button>
                    </div>
                )
            })}
        </div>
    );
};

export default AdminGetBooks;