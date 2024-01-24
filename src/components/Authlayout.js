import React from 'react'
import Container from 'react-bootstrap/Container';
import NavbarComp from './template/NavbarComp';
import AuthFooter from './template/AuthFooter';

const Authlayout = ({ component }) => {
    // console.log("AUTH LAYOUT COMP === ", component)
    return (
        <>
            <Container fluid style={{ background: '#2b3035', marginBottom: '50px' }}>
                <NavbarComp></NavbarComp>
            </Container>
            {component}
            <Container fluid className='' style={{ marginTop: '50px' }} >
                <AuthFooter></AuthFooter>
            </Container>
        </>
    )
}

export default Authlayout
