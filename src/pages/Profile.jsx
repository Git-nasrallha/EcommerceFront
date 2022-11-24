import React,{useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Tab ,Row ,Col ,Nav} from "react-bootstrap";
import EditUser from '../components/user/EditUser';
import UserAvater from '../components/user/UserAvater';
import UserInfo from '../components/user/UserInfo';
import { getUser } from '../store/actions/authAction';
import { logout } from '../store/reducers/userSlice';


const Profile = () => {
    const {user} = useSelector(state=>state.user);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUser());
    },[dispatch]);
   
  return (
    <div className='container-fluid profile'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="myInfo">
      <Row>
        <Col sm={3}>
            <UserAvater dispatch={dispatch} user={user}/>
            <Nav variant="pills" className="flex-column">
                <Nav.Item>
                <Nav.Link eventKey="myInfo">My Info</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link eventKey="Edit"> Edit</Nav.Link>
                <button className='btn btn-logout' onClick={()=>{dispatch(logout())}}> Logout</button>
                </Nav.Item>
            </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="myInfo">
              <UserInfo user={user}/>
            </Tab.Pane>
            <Tab.Pane eventKey="Edit">
              <EditUser user={user}/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  )
}

export default Profile
