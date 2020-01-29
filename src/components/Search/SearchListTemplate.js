import React, { useCallback, useState } from 'react';
import parse, { domToReact } from 'html-react-parser';

const SearchListTemplate = ({ resultData, setUserInput, selectedId }) => {

    const onClickEvent = useCallback((text) => {
        setUserInput(text)
    }, [resultData])

    const styles = {
        border: '1px solid red'
    }
    return (
        <>
            {selectedId}
            <div >
                {resultData && resultData.map((val, idx) => {
                    return (
                        <div key={idx} style={idx + 1 === selectedId ? styles : null} onClick={() => onClickEvent(val)}>{parse(val, {
                            replace: domNode => {
                                if (domNode && domNode.name === 'em') {
                                    return <span style={{ fontWeight: "bold" }}>
                                        {domNode.children.reduce((a, b) => a + b.data, "")}
                                    </span>
                                }
                            }
                        })}</div>
                    )
                })}
            </div>
        </>
    );
};

export default SearchListTemplate;