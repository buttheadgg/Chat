import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <App />
);
