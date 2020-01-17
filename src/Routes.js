import React from "react";
import { Switch, Route } from "react-router-dom";
import { Admin, Home, Error404, Auth, UserHistory, BookDetail, SearchPage, MyBooksPage } from "./LazyRoutes";
import Layout from "./components/common/Layout";

const Routes = () => {
  return (
    <>
      <Layout />
      < Switch >
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/userhistory" exact component={UserHistory} />
        <Route path="/search/:id" component={SearchPage} />
        <Route path="/product/detail/:isbn" component={BookDetail} />
        <Route path="/admin" component={Admin} />
        <Route path="/myBooksRoom" component={MyBooksPage} />
        <Route path="/*" exact component={Error404} />
      </Switch >
    </>
  );
};

export default Routes;
