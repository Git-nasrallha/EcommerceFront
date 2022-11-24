import React,{useState} from "react";
import {useDispatch} from "react-redux";
import {FaUserCircle} from "react-icons/fa";
import registerImage from "../images/registerImg.png";
import { userRegister } from "../store/actions/authAction";

const Register = () => {
    const [registerData,setRegisterData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        password2:"" 
    });
    const dispatch = useDispatch();
    //handle change functions
    const handleChange = (e)=>{
        setRegisterData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };
    const {firstName,lastName,email,password,password2} = registerData;
    // handle submit function
    const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(userRegister(registerData))
    setRegisterData({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        password2:"" 
        });
    }
  return (
    <div className="container register mt-3">
          <h2 className="text-center text-capitalize mb-5"> create your free account !</h2>
        <div className="row">
            <div className="col-md-6 d-none d-md-block">
                <img src={registerImage} className="photo-ecommerce" alt="ecommerce"/>
            </div>
            <div className=" registerForm col-md-6 col-sm-12">
                <div className="userIcon"><FaUserCircle/></div>
                <form>
                    <div className="row g-3">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First name"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last name"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-12">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="confirme password"
                                name="password2"
                                value={password2}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="reset"
                                className="form-control"
                                value='Reset'
                            />
                        </div>
                        <div className="col-6">
                            <input
                                type="submit"
                                className="form-control"
                                value='Register'
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Register;
