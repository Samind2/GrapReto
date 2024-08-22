import api from "./api";
import TokenService from "./token.service";

const API_URL = "/api/v1/auth";


const register = async (username, email, password) => {
  return api.post(`${API_URL}/signup`, { username, email, password });
};

const login = async (userName, password) => {
  const response = await api.post(`${API_URL}/signin`, { userName, password });
  if (response.data.accessToken) {
    localStorage.setItem("accessToken", response.data.accessToken);
    // Assuming response.data.user contains user details
    localStorage.setItem("user", JSON.stringify(response.data.user));
  }
  return response;
};

const logout = () => {
  // Clear local storage or use TokenService to manage token removal
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
