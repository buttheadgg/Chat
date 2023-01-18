import { Box, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { getAuth, signInWithPopup } from "firebase/auth";
import React, { FC } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../config/fbConfig";

const Login: FC = () => {
  const login = async () => {
    const provider = new GoogleAuthProvider();
    const { user } = await signInWithPopup(auth, provider);
    console.log(user);
  };

  return (
    <Container>
      <Box p={5}>
        <Button onClick={login}>Enter with Google</Button>
      </Box>
    </Container>
  );
};
export default Login;
