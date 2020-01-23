import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAdmin } from "./index";

export default ({ component: Component, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAdmin() ? (
        <Component {...props} />
      ) : (

          <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />
        )
    }
  />
);
