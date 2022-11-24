import React from 'react';
import {Routes , Route} from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Product from '../pages/Product';
import ProductDetails from '../pages/ProductDetails';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import LoginRoute from './LoginRoute';
import PrivateRoute from './PrivateRoute';
import Orders from '../pages/Orders';

const AppRoute = () => {
  return (
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route element={<LoginRoute/>}>
        <Route path='/user/register' exact element={<Register/>} />
      </Route>
      <Route element={<PrivateRoute/>}>
        <Route path='/user/profile' exact element={<Profile/>} />
      </Route>
      <Route path='/:slug' exact element={<Product/>} />
      <Route path='/:name/:id' exact element={<ProductDetails/>} />
      <Route path='/cart' exact element={<Cart/>} />
      <Route path='/user/order' exact element={<Orders/>} />
    </Routes>
  )
}

export default AppRoute;
