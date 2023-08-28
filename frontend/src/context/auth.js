import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });


   
useEffect(() => {
 const data = JSON.parse(localStorage.getItem("user_info"));
const token = localStorage.getItem("token_rare");
    if (token && data) {
   console.log("jfj")
      setAuth({
        ...auth,
        user: data,
        token:token,
      });
 
    }
    //eslint-disable-next-line
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      { children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };