import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import {Link} from "react-router-dom";
import OrderItem from "../components/orders/OrderItem";
import {useSelector} from "react-redux";


const Orders = () => {
    const {orders} = useSelector(state=>state.order);
  return (
    <div className="container orders-page">
        <Breadcrumb>
            <Breadcrumb.Item> <Link to="/">Home</Link> </Breadcrumb.Item>
            <Breadcrumb.Item> <Link to="/user/profile">My Profile</Link> </Breadcrumb.Item>
            <Breadcrumb.Item active>My Oreders</Breadcrumb.Item>
        </Breadcrumb>
        {
            orders && orders.map(orderItem=>{
               return <OrderItem key= {orderItem._id} orderItem={orderItem}  />
                
            })
        }
        
         
    </div>
  )
}

export default Orders
