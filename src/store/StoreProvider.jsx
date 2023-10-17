import { createContext } from "react";
import useStoreReducer from "./useStoreReducer";

export const StoreContext = createContext(null)

// eslint-disable-next-line react/prop-types
export default function StoreProvider({ children }){
  const {
    user,
    loginUser,
    logoutUser
  } = useStoreReducer()

  return <StoreContext.Provider
    value={{
      user,
      loginUser,
      logoutUser
    }}
  >
    {children}
  </StoreContext.Provider>
}