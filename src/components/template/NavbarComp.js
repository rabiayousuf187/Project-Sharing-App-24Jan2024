import React, { useState,useEffect, useContext } from 'react'
import { useNavigate, NavLink, Navigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import logo from '../../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import AuthService from '../../services/auth';
import { UserContext } from '../contexts/UserContexts';

function NavbarComp() {

  // console.log("NAVBAR PROPS ==== ", props)
  
  // const {userInfo, setUserInfo} = useContext(UserContext);


  //userStatus  true for UnAuth and cause Login and Register Button Show
  const [userStatus, setUserStatus] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, [userStatus]);

  const checkToken = async () => {
    try {
      
      let token = localStorage.getItem('token');
      console.log("NAVBAR USer userStatus=== ", token, userStatus)
      if (!token) {
        console.log("No User Login")
        // localStorage.removeItem("token")
        setUserStatus(false);
      } else {
        console.log("User Already Loggined")
        // navigate(`/`);
        setUserStatus(true);
        // setUserInfo()
      }
      console.log("UNAUTH USer after userStatus=== ", token, userStatus)
    } catch (error) {
      navigate(`/`);
    }
  }


  const logout = async () => {
    // setProcessing(true);
    console.log("NAVBAR User STATUS after logout ==== ", processing)
    console.log("LOgout hit ==== ", processing)
    try {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUserStatus(false)
        // User Logout
        console.log("User Successfully LOggedOUT!")
        setProcessing(false); 
        setUserStatus(false);
        navigate(`/login`);
        enqueueSnackbar("User Successfully LoggedOut", { variant: "success", autoHideDuration: '3s' });
        // return <Navigate to="/login" replace />;
    }
    catch (e) {
      setProcessing(false);
      enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '3s' });
    }
  }

  return (
    <>
      <Container>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}React-BloggUp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link tabIndex={0}><NavLink to="/">Home</NavLink></Nav.Link>
                {/* <Nav.Link tabIndex={1}><NavLink to="/P">Blogs</NavLink></Nav.Link> */}
                <Nav.Link tabIndex={2}><NavLink to="/contact">Contact</NavLink></Nav.Link>
                <Nav.Link tabIndex={3}><NavLink to="/about">About</NavLink></Nav.Link>
                {userStatus ? (console.log("userStatus nav ====", userStatus),
                    <> 
                      <Nav.Link tabIndex={4}><NavLink to="/auth/dashboard">DashBoard</NavLink></Nav.Link>
                      <Nav.Link tabIndex={5}><NavLink to="#"  onClick={logout}>Logout</NavLink></Nav.Link>
                    </>
                ) : (
                  <>
                    <Nav.Link tabIndex={4}><NavLink to="/register">Register</NavLink></Nav.Link>
                    <Nav.Link tabIndex={5}><NavLink to="/login">Login</NavLink></Nav.Link>
                  </>
                  )}

                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default NavbarComp;