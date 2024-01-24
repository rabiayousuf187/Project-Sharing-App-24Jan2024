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
                {/* <h1>DashBoard</h1> */}
                <CreateProject />
                <ProjectList />
            </Container>
        </>
    )
}

export default DashBoard
