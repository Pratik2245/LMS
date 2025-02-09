import { createContext, useContext } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const value = "hello";
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
