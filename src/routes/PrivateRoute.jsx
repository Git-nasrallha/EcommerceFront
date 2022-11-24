import React from 'react';
import {Navigate , Outlet} from "react-router-dom";
const token = JSON.parse(localStorage.getItem('userToken'));

const PrivateRoute = () => {
  return (
    <>
      {
        token? <Outlet/>:<Navigate to="/" />
      }
    </>
  )
}
export default PrivateRoute
