import React,{useState} from "react";
import { Nav, Navbar, Form, Button,Badge, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineStar, AiFillHeart,AiOutlineRise ,AiOutlineArrowDown,AiOutlineLogout } from "react-icons/ai";
import { BsCreditCard2BackFill, BsFillCartCheckFill,BsFillQuestionSquareFill } from "react-icons/bs";
import { ImFolderUpload } from "react-icons/im";
import { RiCamera3Fill,RiArrowDropDownLine } from "react-icons/ri";
import {IoIosNotifications} from "react-icons/io";
import barndImagr from '../images/flipkart-plus_8d85f4.png';
import LoginModal from "./LoginModal";
import {useSelector,useDispatch} from "react-redux";
import { logout } from "../store/reducers/userSlice";
import { userLogin } from "../store/actions/authAction";

const NavbarLinks = ({ label, to, res, icon }) => {
  return (
    <NavLink className="nav-link" to={to} {...res}>
      {icon} {label} 
    </NavLink>
  );
};

const NavbarApp = () => {
  const {user,isAuthonticated} = useSelector(state=>state.user);
  const dispatch = useDispatch();
  const {cart} = useSelector(state=>state.cart); 
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  //handle login user
  const handleLogin =(loginData)=>{
    dispatch(userLogin(loginData));
    setShow(false);
  }
  const handleLogOut =()=>{
      dispatch(logout());
  }
  return (
    <div className="navbarapp">
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
          <Link className="navbar-brand" to="/">
           <img src={barndImagr} alt="flipkart" width='75px' />
          </Link>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search For Products , barands and more "
              className="me-2"
              aria-label="Search"
            />
            <Button className="btn-search">
              <FaSearch />
            </Button>
          </Form>
          <Nav className="me-auto">
            <div className="dropdown">
              <div className="show-dropdown">
                {
                  isAuthonticated ? (
                    <h5 style={{color:"#fff",marginTop:"6px"}}> {user.firstName} </h5>
                  ) :(<button onClick={()=>handleShow()} >Login</button>)
                }
              
              </div>
              <ul className="dropdown-content">
                {
                  !isAuthonticated?  <li className="d-flex justify-content-between">
                  <span>New Customer?</span>
                  <Link  to="/user/register">
                    sign up
                  </Link>
                </li>:null
                }
                {
                  isAuthonticated ? <li>
                  <Link className="dropdown-item" to="/user/profile">
                    <CgProfile /> my profile
                  </Link>
                </li>:null
                }
                <li>
                  <a className="dropdown-item" href="!#">
                    <AiOutlineStar /> filpkart plus zone
                  </a>
                </li>
                {
                  isAuthonticated? <li>
                  <Link to="/user/order" className="dropdown-item" href="!#">
                    <ImFolderUpload />My orders
                  </Link>
                </li>:null
                }
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <AiFillHeart /> wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <BsCreditCard2BackFill /> Rewords
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <RiCamera3Fill /> gift cards
                  </a>
                </li>
               {
                isAuthonticated?<li>
                <span className="dropdown-item logout-btn"
                       onClick={handleLogOut}
                >
                  {" "}
                  <AiOutlineLogout /> logout
                </span>
              </li>:null
               }
              </ul>
            </div>
            <NavbarLinks label="become a seller" to="/" />
            <div className="dropdown dropdown-more">
              <div className="show-dropdown">
                <span> more</span> <RiArrowDropDownLine/>
              </div>
              <ul className="dropdown-content-more list-unstyled">
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <IoIosNotifications /> notification preferances
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <BsFillQuestionSquareFill /> 24 x 7 customer care
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <AiOutlineRise /> advertise
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="!#">
                    {" "}
                    <AiOutlineArrowDown /> download app
                  </a>
                </li>
              </ul>
            </div>
            <div className="cart">
            <NavbarLinks label="cart" icon={<BsFillCartCheckFill />} to="/cart" />
            <Badge>{cart.length}</Badge>
            </div>
          </Nav>
          </Container>
          {/*login modal */}
            <LoginModal show={show} handleClose={handleClose} login={handleLogin} />
          {/*end login modal */}
        </Navbar>
      </>
    </div>
  );
};

export default NavbarApp;
