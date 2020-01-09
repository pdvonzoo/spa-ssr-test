import React from "react";
import { rentOneBook } from "./BookListAPI";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import BookImage from "./BookImage";

const BookLayout = styled.div`
  flex: 1;
  padding: 0 30px;
`;

const Book = ({ book }) => {
    const { image, title, writer } = book;
    return (
        <BookLayout>
            <Link to={{ pathname: "/book" }}>
                <BookImage image={image} />
            </Link>
            <BookInfo title={title} writer={writer} rentOneBook={rentOneBook} />
        </BookLayout>

    );
};

export default Book;
