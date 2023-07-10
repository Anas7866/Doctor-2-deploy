import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function PublicRoute({ Component, props }) {
  const userDetail = useSelector((state) => state.Auth);
  if (userDetail.token) {
    return <Redirect to={"/Dashboard-Admin"} />;
  } else {
    return <Component {...props} />;
  }
}
