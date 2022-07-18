import React, { useState } from "react";
import axios from "axios";

export const authContext = React.createContext();

const API = "https://dry-sands-45075.herokuapp.com";

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  async function handleRegister(formData, navigate) {
    try {
      const res = await axios.post(`${API}/account/registration/`, formData);
      console.log(res);
      navigate("/register-success");
    } catch (err) {
      setError(Object.values(err.response.data).flat(2));
    }
  }

  async function handleLogin(formData, email, navigate) {
    try {
      const res = await axios.post(`${API}/account/login/`, formData);
      // console.log(res);
      localStorage.setItem("tokens", JSON.stringify(res.data));
      localStorage.setItem("email", email);
      setCurrentUser(email);
      navigate("/products");
    } catch (err) {
      setError(Object.values(err.response.data.email));
      console.log(err.response.data.email);
    }
  }

  async function checkAuth() {
    setLoading(true);
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/account/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: res.data.access,
          refresh: tokens.refresh,
        })
      );
      const email = localStorage.getItem("email");
      setCurrentUser(email);
    } catch (err) {
      console.log(err);
      handleLogout();
    } finally {
      setLoading(false);
    }
  }
  function handleLogout(navigate) {
    localStorage.removeItem("tokens");
    localStorage.removeItem("email");
    setCurrentUser(false);
    navigate("/login");
  }
  return (
    <authContext.Provider
      value={{
        currentUser,
        error,
        loading,
        setError,
        handleRegister,
        handleLogin,
        checkAuth,
        handleLogout,
      }}>
      {children}
    </authContext.Provider>
  );
};
export default AuthContextProvider;
