import { useReducer } from "react";
import storeReducer, * as types from "./storeReducer"

// store hook
export default function useStoreReducer(){
  const [state, dispatch] = useReducer(storeReducer, initialState)

  const loginUser = ({ user }) => dispatch({
    type: types.LOGIN_USER,
    payload: user
  })

  const logoutUser = () => dispatch({
    type: types.LOGOUT_USER
  })

  return {
    state,
    loginUser,
    logoutUser
  }
}

const initialState = {
  user: "",
};