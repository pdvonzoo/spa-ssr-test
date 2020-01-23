import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isUser } from "./index";

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isUser() ? (
        <Component {...props} />
      ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
    }
  />
);
