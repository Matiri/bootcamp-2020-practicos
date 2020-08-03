import React from "react";
import "../styles/Card.css";


class Card extends React.Component{
    render(){
        return(
            <div class="card mb-4 shadow-sm text-center" id="Card">
                <div class="card-header" id={this.props.tamañoTitulo}>
                    <h4>{this.props.category}</h4>
                    <h6 class="text-muted">{this.props.textSmall}</h6>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${this.props.price}<small class="text-muted">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>{this.props.numero} users included</li>
                        <li>{this.props.gigas} GB of storage</li>
                        <li>Help center access</li>
                        <li>{this.props.contact}support</li>
                    </ul>
                    <button type="button" class="btn btn-block btn-outline-primary" id={this.props.btnEfect}>{this.props.button}</button>
                </div>
            </div>
        )
    }        
}
export default Card;
