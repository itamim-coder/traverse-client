import React from "react";
import SigninPage from "../components/Signin/Signin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TRAVERSE | Signin",
};

const SignIn = () => {
  return (
    <>
      <SigninPage></SigninPage>
    </>
  );
};

export default SignIn;
