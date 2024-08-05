import api from "./api";
import TokenService from "./token.service";

const API_URL = "/api/v1/auth";

const register = async (username, email, password) => {
  return api.post(API_URL + "/signup", { username, email, password });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "/signin", { username, password });
  if (response.data.accessToken) {
    localStorage.setUser("accessToken", JSON.stringify(response.data.accessToken));
    localStorage.setItem(
      "user",
      JSON.stringify(response)
    );
  }
  return response;
};

const logout = () => {
  TokenService.removeUser();
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
