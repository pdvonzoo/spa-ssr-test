import React, { useState } from "react";
import AdminTab from "../components/adminUser/AdminTab";
import AdminBooks from "../components/adminUser/AdminBooks";
import AdminUsers from "../components/adminUser/AdminUsers";

const Admin = () => {
  const [selector, setSelector] = useState(1);
  return <>
    <AdminTab selector={selector} setSelector={setSelector} />
    {selector === 1 ? <AdminUsers /> : <AdminBooks />}
  </>
};

export default Admin;
