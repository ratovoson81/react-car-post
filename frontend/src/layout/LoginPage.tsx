import React from "react";
import { AuthButton } from "../components/AuthButton";
import NavBar from "../router/NavBar";

type props = {
  children: React.ReactNode;
};

const LoginPage: React.FC<props> = ({ children }) => {
  return (
    <div className="flex flex-col justify-center border">
      <AuthButton />
      <NavBar />
      <br />
      {children}
    </div>
  );
};

export default LoginPage;
