import { createContext, useState } from "react";

export const LoggedInContext = createContext({
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
    <LoggedInContext.Provider value={contextValue}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

export default LoggedInContextProvider;
