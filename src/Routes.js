import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Admin, Home, Error404, Auth, UserHistory, BookDetail, searchPage, MyBooksPage } from "./LazyRoutes";

const Routes = () => {
  return (
    // <Layout />
    < Switch >
      <Route path="/" exact component={Home} />
      <Route path="/auth" exact component={Auth} />
      <Route path="/userhistory" exact component={UserHistory} />
      <Route path="/book" component={BookDetail} />
      <Route path="/search/:id" component={searchPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/myBooksRoom" component={MyBooksPage} />
      <Route path="/*" exact component={Error404} />
    </Switch >
  );
};

export default Routes;
