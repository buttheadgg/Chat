import { Container } from "@mui/system";
import React, { FC } from "react";
import "../App.css";

const Loader: FC = () => {
  return (
    <Container>
      <div className="lds-dual-ring"></div>
    </Container>
  );
};

export default Loader;
