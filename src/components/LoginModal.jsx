import React ,{useState} from "react";
import ModalComponent from "./ModalComponent";
import {Button, Form} from "react-bootstrap";
import selesImage from "../images/sales-order.jpg";
import { Link } from "react-router-dom";

const LoginModal = (props) => {
  const [userData , setUserData] = useState({
    email:"",
    password:""
  });
  const handleChange = (e)=>{
    setUserData(prevState=>({
      ...prevState ,[e.target.name] :e.target.value
    }))
  };
  const {email , password} = userData;
  const {show, handleClose,login } = props;

  const loginUser = (e) => {
    e.preventDefault();
    login(userData);
    setUserData({
      email:'',
      password:''
    });
  };
  return (
    <div className="login" >
      <ModalComponent
        show={show}
        handleClose={handleClose}
        size="lg"
        copClass="loginModal"
      >
        <div className="login-content d-flex justify-content-between">
          <div className="login-info">
            <h2 className="mb-4">login</h2>
            <p>get access to your orders , wishlist and recommendations</p>
            <img src={selesImage} alet="seles orders" width="100%" height="150" alt="login" />
          </div>
          <div className="login-form">
            <Form onSubmit={loginUser}>
              <Form.Group
                className="mb-3"
                controlId="email.ControlInput1"
              >
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email Or Mobile Number"
                  value={email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="password.ControlInput1"
              >
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              <p>
                By continuing, you agree to Flipkart's 
                 <a href="!#">Terms of Use</a> and <a href="!#">Privacy Policy</a>.
              </p>
              <Button type="submit">Login</Button> 
              <span>Or</span>
              <Button>Rquest OTP</Button> 
            </Form>
            <div className="new-account">
              <Link onClick={handleClose} to="/user/register">New to Flipkart? Create an account</Link>
            </div>
          </div>
        </div>
      </ModalComponent>
    </div>
  );
};

export default LoginModal;
