import React from "react";

let user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;

export const initialState = {
  userDetails: "" || user,
  loading: false,
  error: null
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        userDetails: action.payload
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        userDetails: null
      };
    case "SIGNUP_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        userDetails: action.payload
      };
    case "SIGNUP_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
