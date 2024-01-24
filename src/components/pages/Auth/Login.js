import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useSnackbar } from 'notistack';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthService from '../../../services/auth';
import axios from "axios";

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loginStatus, setLoginStatus] = useState(null);

  let navigate = useNavigate();

  useEffect(()=>{
    let user = localStorage.getItem('user');
        console.log("At LOgin - USer status=== ",user)
        if (!user) {
          console.log("No User Login")
          navigate(`/login`);
        } else {
          console.log("User Already Loggined")
            navigate(`/auth`);
        }
    }, [])

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    let _form = { ...form };
    _form[e.target.name] = e.target.value;
    setForm(_form);
  }

  const submitForm = async (e) => {
    e.preventDefault();
    console.log("USER DATA to be Login ==== ", form);

    if (form.email && form.password) {
      setProcessing(true);
      console.log("USER DATA to be Login ==== ", form);
      // dispatch(registerUser(form));

      try {
        axios
          .post(`http://localhost:5000/users/loginUser`, form)
          .then((res) => {
            console.log("Login user response ===", res);
            // res
            setForm({
              email: "",
              password: ""
            });
            console.log("Login Res After PArse === ", res.data);
            const { token, user } = res.data;
          
            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            if (res.status === 200) {
              console.log("User LoggedIn successfully with status");
              alert("User LoggedIn successfully with status");
              setProcessing(true); 
              navigate(`/auth/dashboard`);
              // / Assuming your backend sends a success message
              setLoginStatus(`User LoggedIn successfully with status ${res.status}: ${res.data.message}`);

              // enqueueSnackbar(res.data.message, { variant: "success", autoHideDuration: '3s' });
              //   // 
              // Push to /
              // navigate("/");
            }
            // // User already Exist 
            // else if (res.status === 400) {
            //   console.log(res.data.message);
            //   alert(res.message);
            // }
            // // Something  Went wring
            // else if (res.status === 500) {
            //   console.log(res.message);
            //   alert(res.message);
            // }
            // else{
            //   console.log("Invalid User");
            //   alert("Invalid User");
            // }
            // // Push to /
            // navigate("/");
          })
          .catch((error) => {
            setProcessing(false);
            if (error.response) {
              console.log("Error in Login User!", error.response.status, error.response.data.message);
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              setLoginStatus(`Login failed with status ${error.response.status}: ${error.response.data.message}`);
            } else if (error.request) {
              // The request was made but no response was received
              setLoginStatus('No response received from the server');
            } else {
              // Something happened in setting up the request that triggered an Error
              setLoginStatus(`Error: ${error.message}`);
            }
          });

        //   // let data = await AuthService.register(form.username.value, form.email.value, form.password.value);
        //   // console.log("registered data.status === ", data.status)
        //   // if (data.status) {
        //   //   setProcessing(false); navigate(`/auth`);
        //   //   enqueueSnackbar(data.message, { variant: "success", autoHideDuration: '3s' });
        //   // } else {
        //   //   setProcessing(false);
        //   //   enqueueSnackbar(data.message, { variant: "error", autoHideDuration: '3s' });
        //   // }
      }
      catch (e) {
        setProcessing(false);
        enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '3s' });
      }
    } else {
      enqueueSnackbar("All fields are required.", { variant: "error", autoHideDuration: '3s' });
    }


  }

  return (
    <Grid container className="page-container">
      <Grid item md={4} sm={6} xs={11} className="page-block">
        <span className="page-heading"> Login </span>
        <form className="mb-4" onSubmit={submitForm}>
          <TextField variant="standard" margin="normal" fullWidth
            label="Email Address" name="email" autoFocus 
            value={form.email} onChange={handleChange}
            />
          <TextField variant="standard" margin="normal"
            label="Password*" type={passwordVisibility ? "text" : "password"} fullWidth name="password"
            value={form.password} onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" tabIndex={-1}
                    onClick={e => setPasswordVisibility(!passwordVisibility)} >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button type="submit" fullWidth disabled={processing} variant="contained" color="primary" > {processing ? "Processing..." : "Log In"} </Button>
          <p>
            <NavLink to={'/register'}>Create new account</NavLink>
          </p>

        </form>
      {loginStatus && <Alert severity="error">{loginStatus}</Alert>}
      </Grid>
    </Grid>)
}

export default Login;