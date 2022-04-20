import React, { useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./info.css";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

const Info = () => {
  const testData = {
    email: "test",
    password: "test",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  //Submit
  const handleSubmit = (e) => {
    //avoid page from reloading
    e.preventDefault();
    console.log("For Submitted");
  };

  //Login
  const handleLogin = (value) => {
    console.log(value);
  };

  //Logout
  const handleLogout = () => {
    console.log("Logged out!");
  };

  return (
    <div
      className="login"
      style={{
        margin: "10px auto",
        width: "40%",
        border: "3px solid blue",
        padding: "10px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={2}>
            <Typography variant="h2">Sign In</Typography>
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-basic"
              label="Username"
              type="email"
              variant="outlined"
              helperText="Please enter your username"
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              helperText="Please enter your password"
            />
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">
              Remember Me <Checkbox />
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Sign In</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Info;
