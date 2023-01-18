import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { auth } from "../../config/fbConfig";
import cl from "./Navbar.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../Login";

const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Chat
        </Typography>
        {user ? (
          <Button onClick={() => auth.signOut()} color="inherit">
            Exit
          </Button>
        ) : (
          <Button color="inherit">Login</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
