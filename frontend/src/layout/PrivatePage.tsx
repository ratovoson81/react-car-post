import React from "react";
import { AuthButton } from "../components/AuthButton";

type props = {
  children: React.ReactNode;
};

const PrivatePage: React.FC<props> = ({ children }) => {
  return (
    <>
      {children}
      <AuthButton />
    </>
  );
};

export default PrivatePage;
