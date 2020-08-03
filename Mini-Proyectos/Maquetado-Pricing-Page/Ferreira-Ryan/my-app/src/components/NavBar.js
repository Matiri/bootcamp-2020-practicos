import React from 'react';
import '../styles/navbar.css';

function NavBar(){
    return (
        <nav className="main-nav">
            <div className="compText">
                <p>Ryan's company</p>
            </div>
            <div className="links">
                <a href="#" className="nav-links">FEATURES</a>
                <a href="#" className="nav-links">ENTERPRISE</a>
                <a href="#" className="nav-links">SUPPORT</a>
                <button className="login-btn">LOGIN</button>
            </div>
        </nav>
    )
}

export default NavBar;