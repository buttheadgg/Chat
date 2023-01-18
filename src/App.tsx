import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar/Navbar";
import { auth } from "./config/fbConfig";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
