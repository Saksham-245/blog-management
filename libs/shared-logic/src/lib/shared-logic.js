import React, { useReducer } from "react";
import { AuthDispatchContext, AuthStateContext } from "./context/Context";
import { AuthReducer, initialState } from "./reducer/AuthReducer";

export async function listBlogs() {
  const response = await fetch("/api/user/list-blogs");
  return response.json();
}

export function useAuthState() {
  const context = React.useContext(AuthStateContext);

  if (context === undefined) {
    throw new Error("useAuthState must be used within a AuthProvider");
  }
  return context;
}

export function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);

  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within a AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export async function login(dispatch, loginPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginPayload)
  };

  try {
    dispatch({ type: "LOGIN_REQUEST" });
    let response = await fetch("/api/admin/login", requestOptions);
    let data = await response.json();

    if (data?.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data?.user });
      localStorage.setItem("user", JSON.stringify(data?.user));
      return data;
    }
    dispatch({ type: "LOGIN_FAILURE", payload: data });
    return data;
  } catch (e) {
    dispatch({ type: "LOGIN_FAILURE", payload: e });
  }
}

export async function signup(dispatch, signupPayload) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupPayload)
  };

  try {
    dispatch({ type: "SIGNUP_REQUEST" });
    let response = await fetch("/api/admin/signup", requestOptions);
    let data = await response.json();

    if (data) {
      dispatch({ type: "SIGNUP_SUCCESS", payload: data?.user });
      return data?.user;
    }
    dispatch({ type: "SIGNUP_FAILURE", payload: data?.user });
    return data;
  } catch (e) {
    dispatch({ type: "SIGNUP_FAILURE", payload: e });
  }
}
