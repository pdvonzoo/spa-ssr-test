import styled from "styled-components";
import { pointColor } from "../../common/colors";

const Container = styled.div`
    width: 70%;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    border: 1px solid #040404;
    margin: auto;
    margin-bottom: -1px;
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 90%;
    }
`;

const Img = styled.img`
    width: 15rem;
    height: auto;
    margin-bottom: 1rem;
`;

const Title = styled.h2`
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: bold;
    padding-bottom: 1.5rem;
    width: 70%;
    margin: 2rem auto 0;
    @media (max-width: 1000px) {
        width: 80%;
    }
    @media (max-width: 600px) {
        width: 90%;
    }
`;

const TextContainer = styled.div`
`;

const BtnContainer = styled.div`
    padding-top: 1.5rem;
`;

const Heading2 = styled.h2`
    font-size: 1.2rem;
    line-height: 1.4;
    font-weight: bold;
    padding-bottom: 1.5rem;
`;
const Param = styled.p`
    font-size: 1.2rem;
    line-height: 1.4;
`;
const Btn = styled.button`
    padding: .4rem .8rem;
    border: 0;
    border-radius: 0;
    background: rgb(51,51,51);
    color: #fff;
`;

export { Container, TextContainer, BtnContainer, Heading2, Param, Btn, Img, Title };