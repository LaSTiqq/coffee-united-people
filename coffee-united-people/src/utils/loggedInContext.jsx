import { createContext, useState } from "react";

export const loggedInContext = createContext({
  isLoggedIn: false,
  setLoggedInStatus: (status) => {},
});
const LoggedInContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const setLoggedInStatus = (status) => {
    setLoggedIn(status);
  };
  const contextValue = { isloggedIn: loggedIn, setLoggedInStatus };
  return (
    <loggedInContext.Provider value={contextValue}>
      {props.children}
    </loggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
