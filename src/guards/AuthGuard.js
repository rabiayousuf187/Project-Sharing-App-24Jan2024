import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth';

const AuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkToken();
  }, [component]);

  const checkToken = async () => {
    try {
      let token = localStorage.getItem("token");
      console.log("Get User == ", token)
      if (!token) {
        console.log("Get User == ", token)
        navigate(`/login`);
      }
      setStatus(true);
      return;
    } catch (error) {
      navigate(`/login`);
    }
  }

  return status ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
}

export default AuthGuard;


// import React, {useEffect} from 'react'

// const AuthGuard = ({component}) => {

//     // didnot display initially without Auth
//     useEffect(() => {
//         console.log("Auth Guard");
//     }, []);


//   return (
//     <>
//       <React.Fragment>{component}</React.Fragment>
//     </>
//   )
// }

// export default AuthGuard
