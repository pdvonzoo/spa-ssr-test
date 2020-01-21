import styled from "styled-components";
import { pointColor } from "../../common/colors";

const Container = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    border: 1px solid #040404;
    margin: auto;
    margin-bottom: -1px;
`;

const TextContainer = styled.div`
`;

const BtnContainer = styled.div`
    display: flex;
    align-items: baseline;
`;

const Heading2 = styled.h2`
    font-weight: bold;
    font-size: 1.2rem;
    padding-bottom: 1rem;
`;
const Param = styled.p`
    font-size: 1.2rem;
`;
const Btn = styled.button`
    margin-left: 1rem;
    padding: .4rem .8rem;
    border: 0;
    border-radius: 2rem;
    background-color: ${pointColor};
`;

export { Container, TextContainer, BtnContainer, Heading2, Param, Btn };