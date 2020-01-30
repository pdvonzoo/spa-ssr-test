import React, { useCallback, useState } from 'react';
import parse from 'html-react-parser';
import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    left: 0;
    top: 3rem;
    z-index: 99;
    width: 100%;
    background: #fff;
`;

const Item = styled.div`
    box-sizing: border-box;
    padding: .5rem .3rem;
    border: 1px solid #fff;
    font-size: 1rem;
`

const SearchListTemplate = ({ resultData, setUserInput, selectedId }) => {

    const onClickEvent = useCallback((text) => {
        setUserInput(parse(text).map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
            .join(""))
    }, [resultData])

    const styles = {
        border: '1px solid #040404'
    }
    return (
        <Container>
            {resultData && resultData.map((val, idx) => {
                return (
                    <Item key={idx} style={idx + 1 === selectedId ? styles : null} onClick={() => onClickEvent(val)}>{parse(val, {
                        replace: domNode => {
                            if (domNode && domNode.name === 'em') {
                                return <span style={{ fontWeight: "bold" }}>
                                    {domNode.children.reduce((a, b) => a + b.data, "")}
                                </span>
                            }
                        }
                    })}</Item>
                )
            })}
        </Container>
    );
};

export default SearchListTemplate;