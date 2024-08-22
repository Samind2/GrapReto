import api from "./api";
import TokenService from "./token.server";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
const AUTH_API = import.meta.env.VITE_AUTH_API || "/api/v1/auth";

const register = async (userName, email, password) => {
  return await api.post(`${BASE_URL}${AUTH_API}/signup`, { userName, email, password });
};

const login = async (userName, password) => {
  const response = await api.post(`${BASE_URL}${AUTH_API}/signin`, { userName, password });
  if (response.data.accessToken) {
    localStorage.setItem("accessToken", JSON.stringify(response.data.accessToken));
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response;
};

const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
