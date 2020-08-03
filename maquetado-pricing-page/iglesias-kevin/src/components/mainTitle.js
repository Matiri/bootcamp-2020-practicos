import React from 'react';
import '../assets/css/maintitle.css';


class MainPageTitle extends React.Component{
    render(){
        return (
        <div class="pricing-head px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">{this.props.pageTitle}</h1>
            <p class="lead">{this.props.pageDescription}</p>
          </div>
        )
    }
}

export default MainPageTitle;
