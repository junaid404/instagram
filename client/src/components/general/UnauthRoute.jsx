import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./AuthContext";

const UnauthRoute = ({ component: Component, ...otherProps }) => {
  const { auth } = useContext(authContext);
  const isAuth = !auth.token || auth.token === "undefined" ? false : true;

  return (
    <Route
      {...otherProps}
      render={(props) =>
        !isAuth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default UnauthRoute;
