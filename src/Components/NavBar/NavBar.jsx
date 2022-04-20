import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const NavBar = () => {
  return (
    <div>
      {" "}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/** ADD MENU ICON **/}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BANK APP
          </Typography>
          <Button color="inherit">USER</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
