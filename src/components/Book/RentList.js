import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { GET_MY_BOOKS_LOOKUP_REQUEST } from '../../modules/user'
const RentList = () => {

  const dispatch = useDispatch();
  const { userLookUpBooks } = useSelector(state => state.user)

  useEffect(() => {
    console.log("여기왔어요")
    dispatch({ type: GET_MY_BOOKS_LOOKUP_REQUEST })
  }, [])



  return (
    <>
      <br /><br /><br />
      {userLookUpBooks && userLookUpBooks.map((book, index) => {
        return (
          <>
            <li key={index}><img src={book.image} /> <span style={{ marginLeft: '20px' }}>신청한 책 제목 {book.name} </span> <span style={{ color: 'blue' }}>빌린 날짜</span> {book.date}   <span style={{ color: 'red' }}>반납여부</span>  {book.isOk ? "반납 완료" : "반납 미완료"}  </li>
            <hr />
          </>
        )
      })
      }
    </>
  )
};

export default RentList;
