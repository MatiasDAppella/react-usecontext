// types
export const LOGIN_USER = "login-user";
export const LOGOUT_USER = "logout-user";

// reducer
export default function storeReducer(state, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, user: action.payload };

    case LOGOUT_USER:
      return { ...state, user: "" };

    default:
      return { ...state };
  }
}
