import React from 'react';
import styled from "styled-components";
import SmallHr from '../common/SmallHr';
{/* <li>  <img src={book.image} />
/        책 이름 : {book.title} / 책 저자 : {book.author} / 출판 날짜 :{book.pubdate}  / isbn:{book.isbn} */}

const Container = styled.li`
    font-family: 'Nanum Gothic', 'Chivo',sans-serif;
    display: inline-block;
    margin-bottom: 5rem;
    padding: 0 1.5rem;
    width: 25%;
    vertical-align: top;
`;

const ListItem = styled.div`
    cursor: pointer;
    &:hover ${BookInfo} ${Title}{
        color: #0099d0;
    }
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20rem;
    background-color: #f3f0f1;
`;
const Image = styled.img`
    height: 60%;
`;

const BookInfo = styled.div`
    height: auto;
    box-sizing: border-box;
    background-color: #fff;
    padding: .5rem 0;
`;
const Title = styled.h2`
    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.4;
    height: 2.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-weight: bold;
`;

const Text = styled.p`
    font-size: 0.9rem;
    line-height: 1.4;
`;

const RentalBtn = styled.button`
    border: 0;
    background-color: #ddd;
    color: #fff;
    padding: .7rem 1rem;
    font-size: 1.1rem;
`;

const searchABook = ({ title, author, pubdate, isbn, image }) => {
    return (
        <Container>
            <ListItem>
                <ImageContainer>
                    <Image src={image} />
                </ImageContainer>
                <BookInfo>
                    <Title>{title}</Title>
                    {/* <Text>{author}</Text> */}
                    {/* <TextContainer>
                        
                        <Text>{pubdate}</Text>
                    </TextContainer> */}
                    {/* <BtnContainer>
                        <RentalBtn>대여하기</RentalBtn>
                    </BtnContainer> */}
                    {/* <Text>{isbn}</Text> */}
                </BookInfo>
            </ListItem>
        </Container>
    );
};

export default searchABook;