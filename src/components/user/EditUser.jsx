import React,{useState,useEffect} from 'react';
import {FaUserCircle} from "react-icons/fa";
import {useDispatch} from "react-redux";
import { updateUser } from '../../store/actions/authAction';


const EditUser = ({user}) => {
    const [editData,setEditData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:""
    });
    const [inputState ,setInputState] = useState(true)
    const dispatch = useDispatch();
    useEffect(()=>{
        if(user){
            setEditData(user)
        }
    },[user])
    //handle change functions
    const handleChange = (e)=>{
        setEditData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    };
    const handleCheckboxChange = (e)=>{
        const checkedValue = e.target.checked;
        setInputState(!checkedValue);
    }
     // handle submit function
     const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateUser(editData));
    }
    const {firstName,lastName,email,password} = editData;
  return (
    <div className='edit-user'>
        <h3 className='text-center mb-3'>Edit My Data</h3>
        <form className='edit-user-form'>
            <div className="userIcon text-center"><FaUserCircle/></div>
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
                <div className="col-12">
                    <input
                        type={inputState? 'password' :"text"}
                        className="form-control"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>
                <div className="col-6">
                    <input
                        type="checkbox"
                        id="statePassword"
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor='statePassword' className='ms-2'>Show password</label>
                </div>
                <div className="col-6">
                    <input
                        type="submit"
                        className="form-control"
                        value='Save'
                        onClick={handleSubmit}
                    />
                </div>
            </div>
        </form>
    </div>
  )
}

export default EditUser
