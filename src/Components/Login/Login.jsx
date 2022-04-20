import React from "react";
import Info from "../Info/Info";
import { Grid, Box } from "@mui/material/";
import BankLogo from "../../Assets/Bank_logo.png";

import "./login.css";

const Login = () => {
  return (
    <>
      <img
        src={BankLogo}
        alt="bank-logo"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth: "25%",
        }}
      />
      <Info />
    </>
  );
};

export default Login;
