import React from "react";
import { Route } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";
import Authlayout from "../components/Authlayout";
import DashBoard from "../components/pages/DashBoard/DashBoard";
import ResponsiveDrawer from "../components/template/ResponsiveDrawer";
import CreateProject from "../components/pages/Projects/CreateProject";
import ProjectList from "../components/pages/Projects/ProjectList";
// This is Array of AuthRoutes
const AuthRoutes = [   
        <Route key="DashBoard" path="/auth/dashboard" element={<AuthGuard component={<Authlayout component={ <ResponsiveDrawer component={<DashBoard />} ></ResponsiveDrawer>}></Authlayout>} />} />,
        <Route key="createproject" path="/auth/createproject" element={<AuthGuard component={<Authlayout component={<ResponsiveDrawer component={<CreateProject />} ></ResponsiveDrawer>}></Authlayout>} />} />,
        <Route key="listproject" path="/auth/listproject" element={<AuthGuard component={<Authlayout component={<ResponsiveDrawer component={<ProjectList />} ></ResponsiveDrawer>}></Authlayout>} />} />
    ]


export default AuthRoutes;


// const AuthRoutes = [
//     <Route key="Welcome" path="/" element={<AuthGuard component={<Welcome />} />} />
// ]

// export default AuthRoutes;