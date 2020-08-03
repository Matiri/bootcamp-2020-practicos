import React from "react";
import "../assets/css/styles.css";

class NavBar extends React.Component {
  render() {
    return(
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 box-shadow navBar_header border-bottom">
      <h6 className="my-0 mr-md-auto text-white navBar_mainText">Company name</h6>
      <nav className="my-2 my-md-0 mr-md-3 navBar_links ">
        <a className="p-2 text-white" href="#">FEATURES</a>
        <a className="p-2 text-white" href="#">ENTERPRISE</a>
        <a className="p-2 text-white" href="#">SUPPORT</a>
      </nav>
      <a className="btn btn-outline-primary btn_login" href="#">LOGIN</a> 
    </div>
      )
  }
}

export default NavBar;
