import React from 'react';
import '../styles/NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
            <div className="navBar__box col-12">
                <h6 className="navBar__nameLogo">{this.props.name}</h6>
                <nav className="navBar__links">
                    <a className="navBar__link" href="#">FEATURES</a>
                    <a className="navBar__link" href="#">ENTERRPRISE</a>
                    <a className="navBar__link" href="#">SUPPORT</a>
                    <input className="navBar__button" type="button" value="LOGIN"/>
                </nav>
            </div>
        )
    }
}

export default NavBar;