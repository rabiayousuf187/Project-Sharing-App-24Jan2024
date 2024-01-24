import React from 'react'
import logo from '../../img/logo.png'

const FooterComp = (props) => {
    return (
        <>
            <div className="footer" style={props.style}>  
                <div className="foot-div" fixed="bottom" >
                    <div className="foot-logo">

                            <img src={ logo } width="50" height="50" align="left" style={{ borderRadius: '40px' }} alt="logo" title="logo" />
                            <p align="right" style={{ paddingTop: '15px' }}><b>Project Sharing Application</b></p>

                    </div>
                    <div className="foot-list">
                        <h3>Projects</h3>
                        <ul>
                            <li><a href="#">Graphics Designer</a></li>
                            <li><a href="#">Digital Marketing</a></li>
                            <li><a href="#">Graphics Designer</a></li>
                            <li><a href="#">Video Editing</a></li>
                            <li><a href="#">Music</a></li>
                            <li><a href="#">Programming</a></li>
                            <li><a href="#">Consultant</a></li>
                            <li><a href="#">Travel Agent</a></li>
                            <li><a href="#">Photography</a></li>
                        </ul>
                    </div>
                    <div className="foot-list">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Partnership</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Investor Relation</a></li>
                        </ul>
                    </div>
                    <div className="foot-list">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Help & Support</a></li>
                            <li><a href="#">Trust & Safety</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Affiliates</a></li>
                        </ul>
                    </div>
                    <div className="foot-list">
                        <h3>Stay Connected</h3>
                        <p>Join us with <b>+50,000</b> People and Enjoy your community</p>
                        <form action="" method="">
                            <input type="email" name="email" id="email" placeholder=" email" required />
                            <input type="date" name="date" id="date" hidden />
                            <input type="time" name="time" id="time" hidden />
                            <button type="submit" name="submit" id="submit" className="btn btn-light">Subscribe</button>
                        </form>
                    </div>
                    <p className="" style={{ textAlign: 'center', }}> Copyright &copy; 2023 - React-BloggUp All Rights Reserved</p>
                </div>
            </div>

        </>
    )
}

export default FooterComp
