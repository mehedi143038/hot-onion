import React from 'react';
import './Header.css';
import logo from '../../hot-onion-restaurent-resources/logo.png';
const Header = () => {
    return (
        <div className = "wholeHeader">
            <nav className="totalNav">
                <div className='leftNav'>
                <img src={logo} alt=""/>
                </div>
                <div className="rightNav">
                    <button className="login-button">LogIn</button>
                    <button className="signup-button">SignUp</button>
                </div>
            </nav>
            <div className="second-potion">
                <div className="background-header">
                    <h1 className="bestFood">Best food waiting for your belly </h1>
                </div>
            </div>
            <div className="select-time">
                <a href="/breakfast">Breakfast</a>
                <a href="/">Lunch</a>
                <a href="/dinner">Dinner</a>
            </div>
        </div>
    );
};

export default Header;