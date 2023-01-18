import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { createContext, FC, useContext } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import { auth } from "../config/fbConfig";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";
import { useAuthState } from "react-firebase-hooks/auth";

const AppRoutes: FC = () => {
  const [user] = useAuthState(auth);
  return user ? (
    <Routes>
      {privateRoutes.map((privateRoute) => (
        <Route
          key={privateRoute.path}
          path={privateRoute.path}
          element={<privateRoute.element />}
        />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteNames.CHAT_ROUTE} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((publicRoute) => (
        <Route
          key={publicRoute.path}
          path={publicRoute.path}
          element={<publicRoute.element />}
        />
      ))}
      <Route
        path="*"
        element={<Navigate replace to={RouteNames.LOGIN_ROUTE} />}
      />
    </Routes>
  );
};

export default AppRoutes;
