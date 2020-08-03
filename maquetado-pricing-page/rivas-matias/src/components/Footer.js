import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component{
  render(){
    return(
      <div className = 'fullList'>
        <h3>{this.props.columnFirst}</h3>
        <ul className = 'list'>
          <a href = '#'><li>{this.props.item1}</li></a>
          <a href = '#'><li>{this.props.item2}</li></a>
          <a href = '#'><li>{this.props.item3}</li></a>
          <a href = '#'><li>{this.props.item4}</li></a>
          <a href = '#'><li>{this.props.item5}</li></a>
        </ul>
      </div>
    )
  }
};

export default Footer;
