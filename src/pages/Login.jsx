import React, { useState } from "react";
import AuthService from "../services/auth.service";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(user.userName, user.password);
      console.log(response); // For debugging
  
      if (response.status === 200) {
        const currentUser = response.data;
        login(currentUser);
        Swal.fire({
          icon: 'success',
          title: 'Login successful!',
          text: 'You will be redirected to the homepage.',
        });

        setUser({
          userName: '',
          password: '',
        });

        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error); // For debugging
      Swal.fire({
        icon: 'error',
        title: 'Login failed!',
        text: 'Please check your credentials and try again.',
      });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#C9DABF" }}
    >
      <div
        className="w-full max-w-md p-8 space-y-8 rounded-lg shadow-2xl"
        style={{ backgroundColor: "#9CA986" }}
      >
        <h2 className="text-3xl font-bold text-center" style={{ color: "#5F6F65" }}>
          Login
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="userName"
              className="block text-sm font-medium"
              style={{ color: "#5F6F65" }}
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user.userName}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm sm:text-sm"
              style={{
                borderColor: "#808D7C",
                backgroundColor: "#C9DABF",
                color: "#5F6F65",
              }}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium"
              style={{ color: "#5F6F65" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="block w-full px-3 py-2 mt-1 border rounded-md shadow-sm sm:text-sm"
              style={{
                borderColor: "#808D7C",
                backgroundColor: "#C9DABF",
                color: "#5F6F65",
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md shadow-sm"
              style={{
                backgroundColor: "#808D7C",
                color: "#C9DABF",
              }}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
