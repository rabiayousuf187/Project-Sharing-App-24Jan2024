import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";


const Register = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [registrationStatus, setRegistrationStatus] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem('user');
    console.log("UNAUTH USer status=== ", user)
    if (!user) {
      console.log("No User Login")
      navigate(`/register`);
    } else {
      console.log("User Already Loggined")
      navigate(`/auth`);
    }
  }, [])

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: 'user'
  });

  const handleChange = (e) => {
    let _form = { ...form };
    _form[e.target.name] = e.target.value;
    setForm(_form);
  }

  
  const submitForm = async (e) => {
    e.preventDefault();
    console.log("USER DATA to be registered ==== ", form);
    
    if (form.firstName && form.lastName && form.email && form.password) {
      setProcessing(true);
    
      console.log("USER DATA to be registered ==== ", form);
      // dispatch(registerUser(form));

      try {
        axios
        .post(`http://localhost:5000/users/addUser`, form)
          .then((res) => {
            console.log("REgister user response ===", res);
            // res
           
            console.log("Register Res After PArse === ", res.data);
            const { token, user } = res.data;

            localStorage.setItem("token", JSON.stringify(token));
            localStorage.setItem("user", JSON.stringify(user));
            if (res.status === 200) {
              console.log(res.data.message);
              setForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: 'user'
              });
              alert("User Successfully Added");
              // localStorage.setItem
              setProcessing(true); navigate(`/auth/dashboard`);
              // / Assuming your backend sends a success message
              setRegistrationStatus(`User registered successfully with status ${res.status}: ${res.data.message}`);

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
              console.log("Error in register User!", error.response.status, error.response.data.message);
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              setRegistrationStatus(`Registration failed with status ${error.response.status}: ${error.response.data.message}`);
            } else if (error.request) {
              // The request was made but no response was received
              setRegistrationStatus('No response received from the server');
            } else {
              // Something happened in setting up the request that triggered an Error
              setRegistrationStatus(`Error: ${error.message}`);
            }
          });

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
      <Grid item md={4} sm={6} xs={12} className="page-block">
        <span className="page-heading"> Register </span>
        <form className="mb-12" onSubmit={submitForm} encType="multipart/form-data">
          <Grid container spacing={2}>
            
            <Grid item xs={6} sm={6}>
              <TextField
                name="firstName"
                fullWidth
                value={form.firstName} onChange={handleChange}
                label="First Name"
                autoFocus margin="normal"
              />
            </Grid>
            <Grid item xs={6} sm={6}>
              <TextField autoFocus
                fullWidth
                value={form.lastName} onChange={handleChange}
                label="Last Name"
                name="lastName"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField autoFocus margin="normal" fullWidth
                label="Email Address" name="email"
                value={form.email} onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField autoFocus margin="normal"
                label="Password*" type={passwordVisibility ? "text" : "password"} fullWidth name="password"
                onChange={handleChange}
                value={form.password}
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
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button type="submit" fullWidth variant="contained" color="primary" disabled={processing}>
                {processing ? "Processing..." : "Create Account"}
              </Button>
              <p>
                <NavLink to={'/login'}>Already have an account ?</NavLink>
              </p>
            </Grid>
          </Grid>
        </form>
        {registrationStatus && <Alert severity="error">{registrationStatus}</Alert>}
      </Grid>
    </Grid>)
}

export default Register;