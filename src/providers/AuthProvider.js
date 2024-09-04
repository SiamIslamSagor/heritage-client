"use client";

import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState({});

  const [Loading, setLoading] = useState(true);

  const data = {
    user,
    setUser,
    Loading,
    setLoading,
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/user/me", {
        withCredentials: true,
      })
      .then(res => {
        console.log(res);
        setUser(res.data.user);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(user);
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
