import React from 'react';
import './Header.css';
import logo from '../../../src/img/logo/logo2.png';

const Header = () => {
    return (
        <div className='header-area'>
            <div className="header-logo">
                <img style={{width:'80px'}} src={logo} alt="" />
            </div>
            <div className="header-nav">
                
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contarct</a></li>
                        <li><a href="#">Course</a></li>
                    </ul>
               
            </div>
            <div className="header-btn">
                <button>SubAdmin Login</button>
                <button>Admin Login</button>
            </div>
        </div>

    );
};

export default Header;