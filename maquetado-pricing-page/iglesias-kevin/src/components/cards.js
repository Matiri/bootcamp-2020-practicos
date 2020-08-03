import React from 'react';
import '../assets/css/cards.css';
/* boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


class Cards extends React.Component{
    render(){
        return (
        <div class="card mb-4 box-shadow mx-auto text-center">
            <div class="card-header">
                <h4 class="my-1 font-weight-normal">{this.props.cardTitle}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title my-2">{this.props.suscriptionPrice} <small class="text-muted my-2">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>{this.props.usersIncluded}</li>
                    <li>{this.props.totalStorage}</li>
                    <li>{this.props.emailSupport}</li>
                    <li>{this.props.centerHelpAccs}</li>
                    <button type="button" class="my-2 btn btn-lg btn-block">{this.props.buttonTypeMsj}</button>
                </ul>
            </div>
        </div>
        )
    }
}

export default Cards;