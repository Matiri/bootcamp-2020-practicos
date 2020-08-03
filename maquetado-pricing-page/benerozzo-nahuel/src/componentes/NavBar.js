import React from 'react';
import './../styles/navStyle.css';

class NavBar extends React.Component{
    render(){
        return(
            <div className="navBg navDiv">
            
            <h6 className="inlineBlock nameCompany">
                {this.props.companyName}
            </h6>
            
            <nav className="nav navBg inlineBlock"> 
                <a href="#" className="inlineBlock navLink">{this.props.navFeatures}</a>
                <a href="#" className="inlineBlock navLink">{this.props.navEnterprise}</a>
                <a href="#" className="inlineBlock navLink">{this.props.navSupport}</a>
            </nav>
        <a className="inlineBlock" href="#"><button className="navButton">{this.props.navButtonText}</button></a>
            </div>
        )
    }
}
export default NavBar;