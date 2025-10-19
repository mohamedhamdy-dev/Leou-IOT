import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const dummyUsers = [
  {
    id: "64f1b2a8c2a3e91b8a5b7a9d",
    name: "Mohamed Hamdy",
    email: "mohamed_hamdy@dev.com",
    role: "user",
    phone: "01022736402",
    avatar: "franksinatra.jpg",
  },
];

const authContext = createContext();

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    user: dummyUsers[0],
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
}

export default AuthProvider;

AuthProvider.propTypes = { children: propTypes.node };

export function useAuth() {
  return useContext(authContext);
}
