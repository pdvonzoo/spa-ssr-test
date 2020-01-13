import React from 'react';

const AdminResult = () => {
    return (
        <div key={idx} style={{
            border: '2px solid red', width: '1000px', padding: '10px', margin: "10px auto"
        }}>
            <p>
                <span style={{ color: 'red', fontSize: '15px' }}>책 이름 : {book.title}</span>
                <span style={{ color: "blue", fontSize: '15px' }}>책 저자 :{book.author}</span>
            </p>
            <h1>책 설명</h1>
            <textarea style={{ width: '800px', overflow: 'scroll', height: '400px' }} readonly>
                {book.bookIntroContent}
            </textarea>
            <h1>목차</h1>
            <div style={{ whiteSpace: "pre" }}>
                {book.tableOfContentsContent}
            </div>
            <br />
            <button onClick={() => onSubmitCreate(val.isbn)}  >추가하기</button>
        </div>
    );
};

export default AdminResult;