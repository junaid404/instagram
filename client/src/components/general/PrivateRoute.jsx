import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { authContext } from "./AuthContext";

const PrivateRoute = ({ component: Component, ...otherProps }) => {
  const { auth } = useContext(authContext);

  if (auth.loading) {
    return (
      <Route
        {...otherProps}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }

  return (
    <Route
      {...otherProps}
      render={(props) =>
        auth.token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/accounts/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
