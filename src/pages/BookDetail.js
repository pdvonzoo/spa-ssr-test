import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookDescTab from "../components/BookDetail/BookDescTab.js";
import BookInfoTab from "../components/BookDetail/BookInfoTab.js";
import { getBookDetail } from '../api/book';
import { useParams } from "react-router-dom";


const Container = styled.div`
  font-family: 'Nanum Gothic';
  display: flex;
  background-color: #fff;
  color: #333;
  border-top: 1px solid #e3e4df;
`;

export default () => {
    let params = useParams();
    const [book, setBook] = useState(null);
    useEffect(() => {
        try {
            const response = getBookDetail(params.isbn)
                .then(response => {
                    console.log(response.data);
                    setBook(response.data)
                });
        } catch (e) {
            console.error(e);
        }
    }, [])


    if (!book) {
        return null;
    }

    const {
        bookTitle,
        bookImage,
        bookWriter,
        bookPublisher,
        bookPublishYear,
        bookIsbn,
        authorIntroContent,
        bookIntroContent,
        tableOfContentsContent
    } = book;
    console.log(book);
    return (

        < Container >
            <BookInfoTab
                image={bookImage}
                title={bookTitle}
                author={bookWriter}
                publisher={bookPublisher}
                pubdate={bookPublishYear}
                isbn={bookIsbn} />
            <BookDescTab
                authorIntroContent={authorIntroContent}
                bookIntroContent={bookIntroContent}
                tableOfContentsContent={tableOfContentsContent} />
        </Container >

    );
}