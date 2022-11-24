import React from 'react';
import {AiFillStar} from "react-icons/ai";

const OrderItem = ({orderItem}) => {
    const formatDate = (date)=>{
        const d = new Date(date);
        return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} / 
            ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}    
        `;
    };
    const deliveredDate = orderItem.orderStatus[orderItem.orderStatus.length -1].date;
    const formatDeliveredDate = (date)=>{
        const d = new Date(date);
        return d.toDateString();
    };
  return (
    <div className="order-item">
        <div className="row">
            <div className="col-md-8">
                {
                    orderItem.orders.map(({orderId,image,name,price,quantity})=>
                        <div key={orderId} className="row mb-3">
                            <div className="col-md-2">
                                <div className="order-image">
                                    <img src={image} alt="orderItem"/> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="order-name">
                                    <h6>{name}</h6>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="order-price">
                                    <h6 className="mb-3">price</h6>
                                    <h6>$ {price}</h6>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="order-quantity">
                                    <h6 className="mb-3">qyt</h6>
                                    <h6> {quantity}</h6> 
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="order-toata">
                                    <h6 className="mb-3">total</h6>
                                    <h6>${price*quantity}</h6> 
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="col-md-4 order-info">
                    <p> <strong>Total Order Quntity:</strong> {orderItem.orderQuantity} </p>
                    <p> <strong>Total Order Amount:</strong> ${orderItem.orderAmount} </p>
                    <p>Seller:<span className="text-uppercase">Mohamed Nasrallah</span> </p>
                    <p>Order Date:<span> {formatDate(orderItem.createdAt)} </span> </p>
                    <p>Address:
                        <span> 
                            {
                                `${orderItem.shippingAddress.country}/
                                ${orderItem.shippingAddress.city}/
                                ${orderItem.shippingAddress.street}`
                            } 
                        </span>
                    </p>
                    <div className="order-status">
                    {
                        orderItem.delivered ?<ul className="list-unstyled">
                            <li>Deliverd on {formatDeliveredDate(deliveredDate)}</li>
                            <li>Your Item has been deliverd</li>
                            <li className="text-uppercase">
                                <AiFillStar/>
                                <span className="ms-3">Rate && Review Product</span>
                            </li>
                        </ul>:<h6>payment not yet confimed from the bank</h6>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderItem
