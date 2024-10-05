import { createContext, useContext, useState } from "react";
import propTypes from "prop-types";

const userContext = createContext("userContext");

function UserProvider({ children }) {
  const [logged, setLogged] = useState(false);

  return (
    <userContext.Provider value={{ logged, setLogged }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;

UserProvider.propTypes = { children: propTypes.element };

export function useUser() {
  const value = useContext(userContext);

  return value;
}
