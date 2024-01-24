import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Project = () => {
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

            setToken(token);

            try {
                axios
                    .get(
                        `http://localhost:5000/projects/getAllProjetcs`,
                        {},
                    )
                    .then((res) => {
                        console.log("Sll Proj Getting by User ID response ===", res);
                        console.log("user Projects ==== ", res.data);
                        if (res.status === 200) {
                            // console.log(res.data.message);
                            setUserProjects(res.data.data);
                            enqueueSnackbar("All Users Project Successfully getted!", { variant: 'success' });
                            setTimeout(() => {
                                closeSnackbar(); // Close the snackbar manually after a duration
                            }, 2000);
                            // localStorage.removeItem("newProject");
                        }
                    })
                    .catch((error) => {
                        if (error.response) {
                            console.log("Error in all projects Getting", error.response.status, error.response.data.message);
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
    }, [newProject]);


    return (
        <>
            <h1 className='sub-Heading'>Projects</h1>
            {userProjects.length === 0 ? (
                <p key={0}>No Projects found for this user.</p>
            ) : (
                <ul className='list'>
                    {userProjects.map((data) => (
                        <div key={data.id} className='list-card'>
                            <h3>{data.title}</h3>
                            <p>{data.details}</p>
                            <p>{data.url}</p>
                            <p>Submitted By: <b>{data.devName}</b></p>
                        </div>
                    ))}
                </ul>
            )}
        </>
    );
};

export default Project;
