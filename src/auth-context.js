import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  token: null,
  userName: null,
  userRole: null,
  login: () => {},
  logout: () => {},
});
