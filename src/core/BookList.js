import React, { useEffect, useState } from "react";
import Data from "../data.json";
import Book from "./Book";
import { rentOneBook } from "./BookListAPI";
const BookList = () => {
  const [datas, setDatas] = useState(null);
  useEffect(() => {
    setDatas(Data.books);
    console.log(datas);
  }, []);
  return (
    <div>
      {datas &&
        datas.map((book, index) => {
          return (
            <div key={index}>
              <Book key={index} book={book} />
              <button onClick={rentOneBook}>책 대여하기</button>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
export default BookList;
