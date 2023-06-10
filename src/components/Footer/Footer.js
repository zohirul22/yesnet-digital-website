import React from 'react';
import './Footer.css'
import logo from '../../../src/img/logo/banner-logo2.png'

const Footer = (props) => {
    return (
        <div className='footer-padding'>
            <div className="footer">
                <div className="footer-left">
                    <div className="footer-logo">
                        <img style={{width: "300px"}} src={logo} alt="" />
                        </div>
                        <p>The automated process starts as soon as your clothes go into the machine.</p>
                    
                </div>
                <div className="footer-right">
                    <h2>COMPANY</h2>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms and conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">cancellation and</a></li>
                        <li><a href="#">refund policy</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-end">
                <div className="part">
                <h3>VIRTUAL OFFICE ADDRESS</h3>
                <h2>We work DLF Forum, Cybercity, phase lll, gurugram, Haryana 122002.</h2>
                </div>
                <div className="part">
                <h3>VIRTUAL OFFICE ADDRESS</h3>
                <h2>We work DLF Forum, Cybercity, phase lll, gurugram, Haryana 122002.</h2>
                </div>
                <div className="part">
                <h3>VIRTUAL OFFICE ADDRESS</h3>
                <h2>We work DLF Forum, Cybercity, phase lll, gurugram, Haryana 122002.</h2>
                </div>
            </div>
            <p className='copy'>Copyright © 2019 - 2023 Yesnet Digital® All rights reserved.</p>
        </div>

    );
};

export default Footer;