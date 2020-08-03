import React from 'react';
import '../styles/mainTitle.css';

class MainTitle extends React.Component{
    render(){
        return(
            <div className="mainDiv">
                <h1 className="title">
                    {this.props.mainTitle}
                </h1>
                <p className="mainParagraph">
                    Quickly build an effective pricing table for your potential
                    <br></br>
                    customers with this layout. It's built with default 
                    <br></br> 
                    Material-UI components with little customization.
                </p>
            </div>
        )
    }
}
export default MainTitle; 