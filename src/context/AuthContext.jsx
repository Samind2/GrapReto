import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../../services/auth.service";

const AuthContext = createContext("");
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(getUser);
  const login = (user) => setUser(user); //function update 
  const logout = () => {
    AuthService.logout();
    setUser(null);
  };
  const getUser = () => { //ดึงUser
    const temp = localStorage.getItem("user");
    const savedUser = json.parse(temp);
    return savedUser || null;
  };
  useEffect(()=>{
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
  }, [user]) //{}ส่งว่าต้องการให้ทำอะไร []สังเกตุการเปลี่ยนแปลง
  return(
    <AuthContext.Provider value={{user, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);