import React from 'react';
import './../assets/styles/MainTitle.css';

class MainTitle extends React.Component {
    render(){
        return(
            <div className="main__MainTitle">
                <h1 className="main__home-title" >Pricing</h1>
                <p className="main__home-description" >Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</p>
            </div>
        )
    }
}

export default MainTitle;