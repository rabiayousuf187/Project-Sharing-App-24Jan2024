import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UnAuthGuard = ({ component }) => {
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        checkToken();
    }, [component]);

    const checkToken = async () => {
        try {
            let user = localStorage.getItem('user');
            console.log("UNAUTH USer status=== ",user)
            if (!user) {
                localStorage.removeItem("token")
            } 
            setStatus(true);
        } catch (error) {
            navigate(`/`);
        }
    }

    return status ? <React.Fragment>{component}</React.Fragment> : <React.Fragment></React.Fragment>;
}

export default UnAuthGuard;