import React from 'react';
import '../styles/Card.css'

class Card extends React.Component {
    render() {
        return (
            <div class="card mb-4 shadow-sm text-center" id="card">
                <div class="card-header" id={this.props.head}>
                    <h4>{this.props.title}</h4>
                    <h5 className="text-muted">{this.props.small}</h5>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-carg-title">${this.props.price}<small class="text-muted">/mo</small></h1>
                    <ul class="list-unstyled mt-3 mb-4">
                       <li>{this.props.users} users included</li>
                       <li>{this.props.gigas} GB of storage</li>
                       <li>Help center access</li>
                       <li>{this.props.email} support</li>
                   </ul>
                   <button type="button" class="btn btn-block btn-outline-primary" id={this.props.idBtn}>{this.props.content}</button>
                </div>
            </div>
        )
    }
}

export default Card;