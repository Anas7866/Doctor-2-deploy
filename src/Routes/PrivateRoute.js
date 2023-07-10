import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ Component, role, props }) {
  const userDetail = useSelector((state) => state.Auth);
  // const userDetail = { token: "shdbuysbd" };

  if (userDetail.token) {
    // if (
    //   userDetail.user.roleId === null ||
    //   role.indexOf(userDetail.user.roleId) > -1
    // ) {
    return <Component {...props} />;
    // } else {
    //   return <Redirect to="/dashboard" />;
    // }
  } else {
    return <Redirect to="/login" />;
  }
}
