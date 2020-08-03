import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light align-top" id="navBar">
                <a className="navbar-brand"><b>Company name</b></a>
                <div className="navbar ">
                    <ul className="nav justify-content-end">
                        <li className="nav">
                            <a className="navbar text-dark" href="#"><b>FEATURES</b></a>
                        </li>
                        <li className="nav">
                            <a className="navbar text-dark" href="#"><b>ENTERPRISE</b></a>
                        </li>
                        <li className="nav">
                            <a className="navbar text-dark" href="#"><b>SUPPORT</b></a>
                        </li>
                    </ul>
                    <button type="button" class="btn btn-outline-primary"><b>LOGIN</b></button>
                </div>
            </nav>
        )
    }
}

export default Header;
