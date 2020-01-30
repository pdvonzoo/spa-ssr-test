import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { ADMIN_REMOVE_HAVING_BOOK_REQUEST, SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST } from '../../../modules/admin';

export default () => {
    const dispatch = useDispatch();
    const { inhouseBooks, adminIsLoading, offset, hasmoreBooksForAdmin, searchText } = useSelector(state => state.admin)

    const onScroll = () => {
        if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 250) {
            if (hasmoreBooksForAdmin && !adminIsLoading) {
                dispatch({ type: SEARCH_ADMIN_INHOUSE_BOOKS_REQUEST, payload: { search: searchText, offset: offset } })
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    }, [adminIsLoading])

    const deleteBook = useCallback((id, name) => {
        if (confirm(`${name}을 정말로 삭제하시겠습니까?`)) {
            dispatch({ type: ADMIN_REMOVE_HAVING_BOOK_REQUEST, payload: id })
        } else {
            alert("삭제를 취소합니다.")
        }
    }, [inhouseBooks])

    return (
        <div>
            {inhouseBooks && inhouseBooks.map((book, index) => {
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