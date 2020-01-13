import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getMyBooks } from '../../modules/user'
const reserveBooks = () => {


    const { userBooks, isLoading } = useSelector(state => state.user);
    return (
        <>
            <h1>나의 책 장바구니</h1>
            {isLoading && <div>장바구니 로딩중 ......</div>}
            {userBooks && !isLoading && userBooks.map((val, idx) => {
                return (
                    <div>
                        <span>책 이름 :{val.name}</span>
                        <span>책 저자 :{val.writer}</span>
                    </div>
                )
            })}
        </>
    );
};

export default reserveBooks;