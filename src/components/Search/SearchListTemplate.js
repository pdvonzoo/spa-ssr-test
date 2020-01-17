import React, { useCallback } from 'react';

const SearchListTemplate = ({ resultData, setSearch }) => {
    const onClickEvent = useCallback((text) => {
        setSearch(text)
    }, [resultData])
    return (
        <div>
            {resultData && resultData.map((val, idx) => {
                return (
                    <div key={idx} onClick={() => onClickEvent(val.title)}>{val.title}</div>
                )
            })}
        </div>
    );
};

export default SearchListTemplate;