import React from 'react'
import { Route } from 'react-router-dom'
import UnAuthGuard from '../guards/UnAuthGuard'
import Layout from '../components/layout'
import Home from '../components/pages/Home';
import Register from '../components/pages/Auth/Register'
import Login from '../components/pages/Auth/Login'
import Projects from '../components/pages/Projects/Projects';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';


// This is Array of UnAuthRoutes
const UnAuthRoutes = [
  <Route key="Home" path="/" element={<UnAuthGuard component={<Layout component={<Home/>}/>}/>} />,
  <Route key="Login" path="/login" element={<UnAuthGuard component={<Layout component={<Login />} />} />} />,
  <Route key="Register" path="/register" element={<UnAuthGuard component={<Layout component={<Register />}/>}/>} />,
  <Route key="Project" path="/projects" element={<UnAuthGuard component={<Layout component={<Projects/>}/>}/>} />,
  <Route key="About" path="/about" element={<UnAuthGuard component={<Layout component={<About/>}/>}/>} />,
  <Route key="Contact" path="/contact" element={<UnAuthGuard component={<Layout component={<Contact/>}/>}/>} />,

];


export default UnAuthRoutes;
