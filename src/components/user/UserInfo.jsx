import React from 'react';

const UserInfo = ({user}) => {
  if(!user){
    return <p>data loading....</p>
  }
  return (
    <div className='user-info'>
        <h2 className='text-center mb-3'>About Me</h2>
        <p className='text-capitalize'> <strong>Name:</strong> {user.firstName} {user.lastName} </p>
        <p> <strong>Email:</strong> {user.email} </p>
        {/* <p> <strong>Date:</strong> <span> {new Date()} </span></p> */}
    </div>
  )
}

export default UserInfo
