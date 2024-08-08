import { useState, useContext, createContext, useEffect } from "react";
import AuthService from "../../services/auth.service";
const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  // Move getUser function here
  const getUser = () => {
    const temp = localStorage.getItem("user");
    const savedUser = JSON.parse(temp);
    return savedUser || null;
  };

  const [user, setUser] = useState(getUser);

  const login = (user) => setUser(user); // Function to update user state

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  useEffect(() => {
    const temp = JSON.stringify(user);
    localStorage.setItem("user", temp);
  }, [user]); // Observe changes in user state

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
