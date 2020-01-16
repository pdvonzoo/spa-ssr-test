import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BookDescTab from "../components/BookDetail/BookDescTab.js";
import BookInfoTab from "../components/BookDetail/BookInfoTab.js";
import { getBookDetail } from '../api/book';


const Container = styled.div`
  font-family: 'Nanum Gothic';
  display: flex;
  background-color: #fff;
  color: #333;
  border-top: 1px solid #e3e4df;
`;

export default () => {
    const [book, setBook] = useState(null);
    useEffect(() => {
        try {
            // const response = getBookDetail()
            // setBook(response.data);
        } catch (e) {
            console.error(e);

        }
    }, [book])


    if (!book) {
        return null;
    }
    const {
        title,
        image,
        author,
        publisher,
        pubdate,
        isbn,
        description,
        authorIntroContent,
        bookIntroContent,
        tableOfContentsContent
    } = book;

    return (

        < Container >
            <BookInfoTab
                image={image}
                title={title}
                author={author}
                publisher={publisher}
                pubdate={pubdate}
                isbn={isbn} />
            <BookDescTab
                description={description}
                authorIntroContent={authorIntroContent}
                bookIntroContent={bookIntroContent}
                tableOfContentsContent={tableOfContentsContent} />
        </Container >

    );
}