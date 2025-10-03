import React, { createContext, useState, useEffect } from "react";
import axiosInstance from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const u = localStorage.getItem("user");
    return u ? JSON.parse(u) : null;
  });

  useEffect(() => {
    // optionally validate token on mount
  }, []);

  const requestOtp = async (phone_number) => {
    return axiosInstance.post("/auth/request-otp/", { phone_number });
  };

  const verifyOtp = async (phone_number, code) => {
    const resp = await axiosInstance.post("/auth/verify-otp/", { phone_number, code });
    const { access, refresh, user } = resp.data;
    localStorage.setItem("access_token", access);
    localStorage.setItem("refresh_token", refresh);
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    return resp;
  };

  const logout = () => {
    // Remove tokens & user. If you implement blacklist on server, call endpoint to blacklist refresh token first.
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setUser(null);
    // navigate to home if you want
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ user, requestOtp, verifyOtp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
