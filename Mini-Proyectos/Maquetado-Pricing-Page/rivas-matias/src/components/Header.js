import React from 'react';
import '../styles/Header.css';

class Header extends React.Component{
  render(){
    return(
      <header className = 'header'>
        <h6 className = 'companyName'>{this.props.companyName}</h6>
        <nav>
          <a className = 'headerLinks' href = '#'>{this.props.link1}</a>
          <a className = 'headerLinks' href = '#'>{this.props.link2}</a>
          <a className = 'headerLinks' href = '#'>{this.props.link3}</a>
        </nav>
        <a className = 'buttonLink' href = '#'><button className = 'button'>{this.props.buttonLink}</button></a>
      </header>
    )
  }
}

export default Header;