import React, { useEffect, useState } from 'react';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Project = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userProjects, setUserProjects] = useState([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('user');
    console.log("At Login - User status === ", user);

    if (!token) {
      console.log("No User Login");
      navigate(`/login`);
    } else {
      console.log("User Already Logged In");
      console.log("Post Blog User Token == ", token);
      setToken(token);
      let userData = JSON.parse(user);
      setUserName(user["firstName"] + " " + user["lastName"])
      console.log('userData["_id"] === ', user, userData["_id"]);
      setUserId(userData["_id"]);

      try {
        axios
          .post(
            `http://localhost:5000/projects/getUserAllProjects`,{userId: userId},
            {
              headers: {
                authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            }
          )
          .then((res) => {
            console.log("All Projects Getting by User ID response ===", res);
            console.log("User Projects === ", res.data);
            if (res.status === 200) {
              setUserProjects(res.data.data);
              enqueueSnackbar("All Data from Single User Project Successfully fetched!", { variant: 'success' });
              setTimeout(() => {
                closeSnackbar();
              }, 2000);
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log("Error in all projects getting", error.response.status, error.response.data.message);
            } else if (error.request) {
              console.log('No response received from the server');
            } else {
              console.log(`Error: ${error.message}`);
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
  }, [token, userId, enqueueSnackbar, closeSnackbar]);

  return (
    <>
      <h1 className='sub-Heading'>Personal Projects</h1>
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