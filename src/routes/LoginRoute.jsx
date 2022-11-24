import React from 'react';
import {Navigate , Outlet} from "react-router-dom";
const token = JSON.parse(localStorage.getItem('userToken'));

const LoginRoute = () => {
  return (
    <>
      {
        token? <Navigate to="/" /> : <Outlet/>
      }
    </>
  )
}
export default LoginRoute
