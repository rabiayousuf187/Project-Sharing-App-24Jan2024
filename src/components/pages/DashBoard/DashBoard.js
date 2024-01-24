import React, { useState }  from 'react'
// import OffcanvasExample from '../../template/OffcanvasExample'
import {Container} from 'react-bootstrap'
import CreateProject from '../Projects/CreateProject'
import ProjectList from '../Projects/ProjectList'
// import Sidebar from '../../template/Sidebar'
import ResponsiveDrawer from '../../template/ResponsiveDrawer'



const DashBoard = () => {

    return (
        <>
            <Container>
                {/* <Sidebar></Sidebar> */}
                <ResponsiveDrawer></ResponsiveDrawer>
                <div>
                    <h3>WelCome to the DashBoard!</h3>
                    <p>A Project Sharing App's dashboard is a centralized hub that empowers users to efficiently manage, collaborate on, and monitor the progress of their projects. Here's an outline of key components and features you might consider for a project sharing app dashboard:
                        Project Overview: Summary Cards: Display essential project metrics, such as the total number of projects, ongoing projects, completed projects, and upcoming deadlines.
Quick Actions: Provide shortcuts for creating a new project, joining an existing project, or inviting team members. For Different Project Ideas, collaboration and teamwork:</p>
                    
                </div>
                {/* <CreateProject />
                <ProjectList /> */}
            </Container>
        </>
    )
}

export default DashBoard
