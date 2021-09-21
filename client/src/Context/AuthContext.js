import { createContext } from "react";
const authContext = createContext({
  isAuthenticated: false,
  setAuthenticated: () => {},
});

export default authContext;
