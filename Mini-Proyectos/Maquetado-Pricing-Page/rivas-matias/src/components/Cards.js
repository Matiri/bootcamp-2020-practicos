import React from 'react';
import '../styles/Cards.css';

class Cards extends React.Component{
  render(){
    return(
      <div className = 'card'>
        <div className = 'title'>
          <p>{this.props.cardTitle}</p> 
        </div>
        <p className = 'cardPrice'>{this.props.cardPrice}<span className = 'perMonth'>/mo</span></p>
        <ul>
          <li className = 'item'>{this.props.item1}</li>
          <li className = 'item'>{this.props.item2}</li>
          <li className = 'item'>{this.props.item3}</li>
          <li className = 'item'>{this.props.item4}</li>
        </ul>
        <div className = 'buttonContainer'>
          <a href = '#'><button className = 'cardButton'>{this.props.button}</button></a>
        </div>
      </div>
    )
  }
}

class ProCard extends React.Component{
  render(){
    return(
      <div>
      <div className = 'card'>
        <div className = 'title'>
          <i className="far fa-star"></i>
          <p>{this.props.cardTitle}<span className = 'mostPopular'>{this.props.mostPopular}</span></p> 
        </div>
        <p className = 'cardPrice'>{this.props.cardPrice}<span className = 'perMonth'>/mo</span></p>
        <ul>
          <li className = 'item'>{this.props.item1}</li>
          <li className = 'item'>{this.props.item2}</li>
          <li className = 'item'>{this.props.item3}</li>
          <li className = 'item'>{this.props.item4}</li>
        </ul>
        <div className = 'buttonContainer'>
          <a href = '#'><button className = 'mostPopularBtn'>{this.props.mostPopularBtn}</button></a>
        </div>
      </div>
      </div>
    )
  }
}
export {ProCard};
export {Cards};

 