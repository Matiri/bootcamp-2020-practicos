import React from 'react';
function NavBar() {
    return (
    <div className="d-flex flex-column flex-md-row align-items-center  p-2 px-md-4 mb-2  navbar-light bg-light">
      <h5 className="my-0 mr-md-auto font-weight-bold">Company name</h5>
      <nav className="my-2 my-md-0 mr-md-3 text-uppercase navBar-links">
        <a className="p-2 text-dark font-weight-bold" >Features</a>
        <a className="p-2 text-dark font-weight-bold" >Enterprise</a>
        <a className="p-2 text-dark font-weight-bold" >Support</a>
      </nav>
      <a className="btn btn-outline-primary" href="#">Login</a>
    </div>
    );
  }
  export default NavBar;