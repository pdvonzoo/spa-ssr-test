import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ADMIN_REMOVE_HAVING_BOOK_REQUEST } from '../../modules/admin'

const AdminHavingBooks = () => {


    const dispatch = useDispatch();

    const { havingBooks } = useSelector(state => state.admin)




    const deleteBook = useCallback((id, name) => {
        if (confirm(`${name}을 정말로 삭제하시겠습니까?`)) {
            dispatch({ type: ADMIN_REMOVE_HAVING_BOOK_REQUEST, payload: id })
            alert("삭제가 완료되었습니다.")
        } else {
            alert("삭제를 취소합니다.")
        }

    }, [havingBooks])

    return (
        <div>
            {havingBooks && havingBooks.map((book, index) => {
                return (
                    <div>
                        <img src={book.bookImage} />

                        이름 : {book.bookTitle}   / 저자 :  {book.bookWriter}  /  출판일 : {book.bookPublisher}    / ISBN :{book.bookIsbn}
                        <button onClick={() => deleteBook(book.bookId, book.bookWriter)}>책 삭제하기</button>

                    </div>
                )
            })}
        </div>
    );
};

export default AdminHavingBooks;