import React from 'react';
import styled from "styled-components";
import SmallHr from '../common/SmallHr';
import { Link } from 'react-router-dom'
import { pointColor } from '../common/colors';
const Container = styled.li`
    display: inline-block;
    margin-bottom: 5rem;
    padding: 0 1.5rem;
    width: 25%;
    vertical-align: top;
    @media (max-width: 1300px) {
        width: 33.3333%;
    }
    @media (max-width: 1000px) {
        margin-bottom: 2.5rem;
        padding: 0 1rem;
        width: 50%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const ListItem = styled.div`
    cursor: pointer;
    &:hover ${BookInfo} ${Title}{
        color: ${pointColor};
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    background-color: rgb(51, 51, 51);
`;
const Image = styled.img`
    height: 60%;
`;

const BookInfo = styled.div`
    height: auto;
    box-sizing: border-box;
    background-color: #fff;
    padding: 1.2rem 2rem;
`;
const Title = styled.h2`
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.4;
    height: 4.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: bold;
    color: #040404;
`;

const Text = styled.p`
    font-size: 0.9rem;
    line-height: 1.4;
    color: #040404;
`;

const RentalBtn = styled.button`
    border: 0;
    background-color: #ddd;
    color: #fff;
    padding: .7rem 1rem;
    font-size: 1.1rem;
`;

const SearchABook = ({ title, author, pubdate, isbn, image }) => {
    return (
        <Link to={`/product/detail/${isbn}`} >
            <Container>
                <ListItem>
                    <ImageContainer>
                        <Image src={image} />
                    </ImageContainer>
                    <BookInfo>
                        <Title>{title}</Title>
                        <SmallHr></SmallHr>
                        <Text>{author}</Text>
                    </BookInfo>
                </ListItem>
            </Container>
        </Link >
    );
};

export default SearchABook;