import React from 'react';
import '../assets/css/navbar.css';


class NavBar extends React.Component{
    render(){
        return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 border-bottom box-shadow div-navbar-container">
            <h5 className="my-0 mr-md-auto">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3 navBar-elements">
              <a className="p-2" href="">Features</a>
              <a className="p-2" href="">Enterprise</a>
              <a className="p-2" href="">Support</a>
            </nav>
            <a className="btn logIn-btn" href="">LOGIN</a>
        </div>
        )
    }
}

export default NavBar;