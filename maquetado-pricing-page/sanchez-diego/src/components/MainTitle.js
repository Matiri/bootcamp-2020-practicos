import React from 'react';
import '../styles/MainTitle.css';

class MainTitle extends React.Component{
    render(){
        return(
            <div className="main__title">
                <h1 className="manin__title-title">
                    Pricing
                </h1>
                <p className="main__title-paragraph">
                Quickly build an effective pricing table for your potential customers with this layout.<br></br> It's built with default Material-UI components with little customization.
                </p>
            </div>
        )
    }
}

export default MainTitle;