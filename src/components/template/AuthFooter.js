import React from 'react'
import logo from '../../img/logo.png'

const FooterComp = (props) => {
    return (
        <>
            <div className="footer" style={props.style}>  
                <div className="foot-div" fixed="bottom" >
                    <div className="foot-logo">

                            <img src={ logo } width="50" height="50" align="left" style={{ borderRadius: '40px' }} alt="logo" title="logo" />
                            <p align="right" style={{ paddingTop: '15px' }}><b>Project Sharing App</b></p>

                    </div>
                    <p className="" style={{ textAlign: 'center', }}> Copyright &copy; 2023 - React-BloggUp All Rights Reserved</p>
                </div>
            </div>

        </>
    )
}

export default FooterComp
