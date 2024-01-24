import React, { useEffect, useState } from 'react';
import { Alert } from "@mui/material";
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const CreateProject = () => {

    // const [postVisibility, setpostVisibility] = useState(false);
    const [processing, setProcessing] = useState(false);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    // const [token, setBlogStatus] = useState(null);
    const [blogStatus, setBlogStatus] = useState(null);
    const [newBlog, setNewBlog] = useState(false);
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    let navigate = useNavigate();

    const [name, setName] = useState("");

    useEffect(() => {
        let token = localStorage.getItem('token');
        let user = localStorage.getItem('user');
        console.log("At LOgin - USer status=== ", user)

        // let { token, user } = JSON.parse(data);
        if (!token) {
            console.log("No User Login")
            navigate(`/login`);
        } else {
            console.log("User Already Loggined")
            console.log("Post BLog User Token == ", token)
            setToken(token);
            setName(user.username);
              
            let userData = JSON.parse(user);
            console.log('userData["_id"] === ',user,userData["_id"])
            setUserId(userData["_id"]);
          
            //   setToken(user.user.token)
            // navigate(`/auth`);
        }
    }, [])


    useEffect(() => {
        if (blogStatus === 'success') {
            // Clear the form after a successful blog post
            // setForm({ title: "", post: "" });
            blogStatus = true
            localStorage.setItem()
            setProcessing(false);
        }
    }, [blogStatus]);


    const [form, setForm] = useState({
        title: "",
        details: "",
        devName: "",
        url: "",
        userId: userId
    });

    const handleChange = (e) => {
        console.log("BLOG DATA ", e.target.value);
        let _form = { ...form };
        _form[e.target.name] = e.target.value;
        setForm(_form);
        console.log("BLOG DATA AFTER ENTER ==== ", form)
    }

    const submitForm = async (e) => {
        e.preventDefault();
        setProcessing(true);
        
        
        console.log("USER ID +===",userId);

        // Add userId to the form data
        setForm({ ...form, userId: userId });

        console.log("BLog DATA to be Create ==== ", form);

        if (form.title && form.devName && form.details && form.url) {
            setProcessing(true);
            console.log("USER DATA to be Login ==== ", form);
            // dispatch(registerUser(form));

            try {
                axios
                    .post("http://localhost:5000/projects/addProject", form
                        , {
                            headers: {
                                'authorization': `Bearer ${token}`,
                                'Accept': 'application/json',
                                'Content-Type': 'application/json'
                            }
                        }
                    )
                    .then((res) => {
                        console.log("Blog created response ===", res);
                        // res
                        

                        //   setProcessing(false);
                        console.log("BLOG Create Res After PArse === ", res.data);
                        // const { token, user } = res.data;

                        // localStorage.setItem("user", JSON.stringify({token, user}));
                        if (res.status === 201) {
                            setForm({
                                title: "",
                                details: "",
                                devName: "",
                                url: "",
                            });
                            console.log("Project Submitted");
                            alert("Project Submitted");
                            setProcessing(false);
                            document.getElementById('title').value = "";
                            document.getElementById('details').value = "";
                            document.getElementById('url').value = "";
                            document.getElementById('devName').value = "";

                            setNewBlog(true);
                            localStorage.setItem("created", JSON.stringify(res.data));

                            enqueueSnackbar(res.data.message, { variant: "success"});
                            setTimeout(() => {
                                closeSnackbar(); // Close the snackbar manually after a duration
                              }, 2000);

                            //   navigate("/auth/dashboard")
                              navigate("/projects")
                            //   // 
                            // Push to /
                            // navigate("/");
                        }
                    })
                    .catch((error) => {
                        setProcessing(false);
                        if (error.response) {
                            console.log("Error in Blog Creating!", error.response.status, error.response.data.message);
                            // The request was made and the server responded with a status code
                            // that falls out of the range of 2xx
                            setBlogStatus(`Blog Creating failed with status ${error.response.status}: ${error.response.data.message}`);
                        } else if (error.request) {
                            // The request was made but no response was received
                            setBlogStatus('No response received from the server');
                        } else {
                            // Something happened in setting up the request that triggered an Error
                            setBlogStatus(`Error: ${error.message}`);
                        }
                    });

                //   // let data = await AuthService.register(form.username.value, form.title.value, form.post.value);
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
                enqueueSnackbar("Something went wrong.", { variant: "error", autoHideDuration: '1.5s' });
                setTimeout(() => {
                    closeSnackbar(); // Close the snackbar manually after a duration
                  }, 2000);
            }
        } else {
            enqueueSnackbar("All fields are required.", { variant: "error", autoHideDuration: '1.5s' });
            setTimeout(() => {
                closeSnackbar(); // Close the snackbar manually after a duration
              }, 2000);
            setProcessing(false);
        }


    }


    return (
        <>
            <div className="container CreateProject">
                <div className="main-page-content createproject">
                    <form className="form" id="signup-form" onSubmit={submitForm} method='POST'>
                        <div className="upper-form">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="input-group">
                                        <input id="title" name="title" type="text" className="form-control"
                                            onChange={handleChange} placeholder="Project Title" aria-label="title" aria-describedby="basic-addon2" />
                                    </div>
                                    <span id="titleError"></span>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="input-group">
                                        <input id="devName" name="devName" type="text" className="form-control"
                                            onChange={handleChange} placeholder="Developer Name" aria-label="title" aria-describedby="basic-addon2" />
                                    </div>
                                    <span id="titleError"></span>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="input-group">
                                        <input id="url" name="url" type="url" className="form-control"
                                            onChange={handleChange} placeholder="Project URL" aria-label="file" aria-describedby="basic-addon2" />
                                    </div>
                                    <span id="fileError"></span>
                                </div>
                            </div>
                            <div className="row flex-row align-items-center justify-content-center">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="form-floating">
                                        <textarea name="details" className="form-control" placeholder="What is your Project Details" id="details"
                                            onChange={handleChange} style={{ height: "100px", Color:"gray !important" }}></textarea>
                                    </div>
                                    <span id="postError"></span>
                                </div>
                            </div>

                            <div className="row justify-content-end text-center">
                                <div className="col-lg-5 col-md-8 col-sm-8" style={{ textAlign: 'right', padding: 0, margin: "10px 15px" }}>
                                    <button id="publish" name="signup" type="submit" value="submit" disabled={processing}
                                        className="btn btn-get-started publish"> {processing ? "Submiting..." : "Submit"}</button>

                                </div>
                            </div>

                        </div>

                        {/* <div className="lower-form">
                        <div className="row justify-content-start text-center">
                            <div className="col-lg-5 col-md-8 col-sm-8" style={{ textAlign: 'left', padding: 0, margin: 0 }}>
                                <button id="publish" name="signup" type="submit" value="submit"
                                    className="btn btn-get-started publish">Publish Blog</button>

                            </div>
                        </div>
                    </div> */}
                        {blogStatus && <Alert severity="error">{blogStatus}</Alert>}
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateProject;
