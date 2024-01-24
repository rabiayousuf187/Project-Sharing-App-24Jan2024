import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProjectList = () => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState("");
    const [projectstatus, setProjectStatus] = useState(null);
    const [userProjects, setUserProjects] = useState([]);
    const [newProject, setNewProject] = useState([]);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let navigate = useNavigate();

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
            // setName(user.username);
            //   setToken(user.user.token)
            // navigate(`/auth`);
        }
    }, [newProject]);


    useEffect(() => {
        if (userId && token) {
            try {
                axios
                    .post(
                        `http://localhost:5000/Projects/${userId}`,
                        {},
                        {
                            headers: {
                                authorization: `Bearer ${token}`,
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                            },
                        }
                    )
                    .then((res) => {
                        console.log("Blog Getting by User ID response ===", res);
                        console.log("user Projects ==== ", res.data);
                        if (res.status === 200) {
                            console.log(res.data.message);
                            setUserProjects(res.data.data);
                            enqueueSnackbar(res.data.message, { variant: 'success' });
                            setTimeout(() => {
                                closeSnackbar(); // Close the snackbar manually after a duration
                            }, 2000);
                            localStorage.removeItem("newProject");
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            console.log("Error in Blog Getting by User ID!", error.response.status, error.response.data.message);
                            setProjectStatus(`Blog Getting by User ID failed with status ${error.response.status}: ${error.response.data.message}`);
                        } else if (error.request) {
                            setProjectStatus('No response received from the server');
                        } else {
                            setProjectStatus(`Error: ${error.message}`);
                        }
                    });
            } catch (e) {
                console.log("Error === ", e);
                enqueueSnackbar("Something went wrong.", { variant: 'error' });
                setTimeout(() => {
                    closeSnackbar();
                }, 2000);
            }
        }
    }, [userId, token, enqueueSnackbar, closeSnackbar]);

    return (
        <>
            <h1>Projects by User</h1>
            {userProjects.length === 0 ? (
                <p key={0}>No Projects found for this user.</p>
            ) : (
                <ul>
                    {userProjects.map((blog) => (
                        <li key={blog.id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.post}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default ProjectList;
