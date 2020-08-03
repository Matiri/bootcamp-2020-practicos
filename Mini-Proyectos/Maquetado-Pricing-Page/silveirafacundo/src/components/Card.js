import React from 'react';
import './../assets/styles/Card.css';

class Card extends React.Component {
    render(){
        return(
            <div className="Card__main-div">
                <div className="Card__first-div">
                    <h3 className="Card__title">{this.props.title}</h3>
                    <p className="Card__status">{this.props.MostPopular}</p>
                </div>
                <div className="Card__second-div">
                    <h2 className="Card__per-month">{this.props.price}</h2>
                    <p className="Card__paragraph">{this.props.paragraph}</p>
                    <form className="Card__form" action="">
                        <button type="button" className="Card__button" class={this.props.class}>{this.props.button}</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Card;