import React from 'react';
import {Form} from "react-bootstrap";
import avaterImg from "../../images/avatar.jpg"
import {AiFillPicture} from "react-icons/ai";
import { uploadProfileImage } from '../../store/actions/authAction';

const UserAvater = ({dispatch,user}) => {

  const changeAvater = (e)=>{
    const form = new FormData();
    form.append("avatar", e.target.files[0]);
    dispatch(uploadProfileImage(form));
  };

  return (
   <>
   {
      user? <div className='avater mb-3'>
      <img src={user.avatar? user.avatar:avaterImg} className="rounded avatar-img" alt='avatar' />
      <div className='upload-image'>
        <Form >
          <Form.Group className="mb-3">
            <div className='upload-icon'>
              <Form.Label htmlFor='upload-avatar'> <AiFillPicture/></Form.Label>
            </div>
            <Form.Control type="file" id="upload-avatar" name="avatar" onChange={changeAvater} />
          </Form.Group>
        </Form>
      </div>
    </div>:null
    }
   </>
  )
}

export default UserAvater
