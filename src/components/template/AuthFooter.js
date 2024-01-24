import React from 'react'
import logo from '../../img/logo.png'

const FooterComp = (props) => {
    return (
        <>
            <div className="footer auth-footer" style={props.style}>  
                <div className="foot-div" fixed="bottom" >                    
                    <p className="" style={{ textAlign: 'center', }}> Copyright &copy; 2023 - Prohect Sharing App All Rights Reserved</p>
                </div>
            </div>

        </>
    )
}

export default FooterComp
