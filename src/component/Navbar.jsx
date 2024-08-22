import React from "react";
import UserProfile from "./UserProfile";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import { useAuthContext } from "../context/AuthContext";
import Header from "./Header"

const Navbar = () => {
  const { user } = useAuthContext();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Grab Restaurant</a>
      </div>
      <div className="navbar-end space-x-2">
        {user && (
          <div>
            Welcome,{""}
            <span className="text-red-500">
              {user.name}{""}
              {user.roles.map((role, index) => (
                <div key={index} className={"badge text-xs badge-accent"}>{role}</div>
              ))}
            </span>
          </div>
        )}
        {user ? (
          <UserProfile />
        ) : (
          <div className="space-x-2">
            <RegisterButton />
            <LoginButton />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
