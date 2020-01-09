import React from "react";
import Layout from "../Layout/Layout";
import UsersInfo from "./UsersInfo";
import AdminPage from "./AdminPage";

const adminUser = () => {
  return (
    <Layout>
      <UsersInfo />
      <p>--------- 분기선 ---------</p>
      <AdminPage />
    </Layout>
  );
};

export default adminUser;
