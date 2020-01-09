import React from "react";

const Book = ({ book }) => {
  const { title, writer, publisher, publisherYear, isbn, isRental } = book;
  return (
    <>
      <li>책 이름 : {title}</li>
      <li>책 저자 : {writer}</li>
      <li>출판사 : {publisher}</li>
      <li>출판 년도 : {publisherYear}</li>
      <li>isbn : {isbn}</li>
      <li>렌탈 여부 :{isRental ? "출판가능" : "출판 불가능"}</li>
    </>
  );
};

export default Book;
