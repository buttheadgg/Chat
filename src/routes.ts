import Login from "./components/Login";
import Chat from "./components/Chat";

interface Route {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  LOGIN_ROUTE = "/login",
  CHAT_ROUTE = "/",
}

export const publicRoutes = [{ path: RouteNames.LOGIN_ROUTE, element: Login }];

export const privateRoutes = [{ path: RouteNames.CHAT_ROUTE, element: Chat }];
