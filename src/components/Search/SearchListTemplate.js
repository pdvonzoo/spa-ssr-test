import React, { useCallback, useState } from 'react';

const SearchListTemplate = ({ resultData, setSearch, selectedId }) => {

    const onClickEvent = useCallback((text) => {
        setSearch(text)
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
                        <div key={idx} style={idx + 1 === selectedId ? styles : null} onClick={() => onClickEvent(val.title)}>{val.title}</div>
                    )
                })}
            </div>
        </>
    );
};

export default SearchListTemplate;