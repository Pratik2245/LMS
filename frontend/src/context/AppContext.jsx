import { useContext } from "react";

export const AppContext = useContext();
export const AppContextProvider = ({ children }) => {
  const value = "hello";
  return <AppContext.Provider props={value}>{children}</AppContext.Provider>;
};
