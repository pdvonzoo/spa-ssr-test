import React, { useState } from 'react';
import AdminGetBooks from '../components/adminUser/AdminGetBooks';
import AdminSearch from '../components/adminUser/AdminSearch';

const Admin = () => {
  const [view, setView] = useState(true)
  const searchView = () => {
    setView(true)
  }
  const getBooksView = () => {
    setView(false)
  }
  return (
    <div>
      <button onClick={searchView}>추가할 책 검색하기</button>
      <button onClick={getBooksView}>사내 보유 도서 검색하기</button>
      {view ? <AdminSearch /> : <AdminGetBooks />}
    </div>
  );
};

export default Admin;