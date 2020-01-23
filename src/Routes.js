import React from "react";
import { Switch, Route } from "react-router-dom";
import { Admin, Home, Error404, Auth, BookDetail, SearchPage, MyBooksPage } from "./pages/index";
import AdminRoute from "./auth/AdminRoute";
import UserRoute from "./auth/UserRoute";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/search/:search" component={SearchPage} />
        <Route path="/product/detail/:isbn" component={BookDetail} />
        <AdminRoute path="/admin" component={Admin} />
        <UserRoute path="/myBooksRoom" component={MyBooksPage} />
        <Route path="/*" exact component={Error404} />
      </Switch>
    </>
  );
};

export default Routes;
