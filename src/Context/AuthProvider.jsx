import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const authContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <authContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = { children: propTypes.node };

export function useAuth() {
  return useContext(authContext);
}
