import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { dummyData } from "../layout/dummyData";

const AuthContext = createContext();

const UserListProvider = ({ children }) => {
  const [UserList, setUserList] = useState(dummyData)
  


   

 
  return (
    <AuthContext.Provider value={[UserList, setUserList]}>
      { children}
    </AuthContext.Provider>
  );
};

// custom hook
const AuthList = () => useContext(AuthContext);

export { AuthList, UserListProvider };