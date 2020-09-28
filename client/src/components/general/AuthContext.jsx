import React, { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";

export const authContext = createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({ loading: true, user: null, token: "" });

  const setAuthData = (data) => {
    setauth(data);
  };

  useEffect(() => {
    setauth({
      loading: false,
      token: Cookies.get("token"),
      user: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  useEffect(() => {
    Cookies.set("token", auth.token);
    window.localStorage.setItem("user", JSON.stringify(auth.user));
  }, [auth.token, auth.user]);

  return (
    <authContext.Provider value={{ auth, setAuthData }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
