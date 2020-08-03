import React from 'react';
import '../styles/Card.css';

class Card extends React.Component {
    render(){
        return(
            <div className="pumpam">
                <div className="card">
                    <div className="card__title-box">
                        <h1 className="card__title">{this.props.cardTitle}</h1>
                        <p className="card__title-paragraph">{this.props.cardTitleParagraph}</p>
                    </div>
                    <div className="card__title-secondBox">
                        <h2 className="card__price">${this.props.price}<spam className="card__price-spam">/mo</spam></h2>
                        <p className="card__paragraph">{this.props.card__paragraph}</p>
                        <form>
                            <input className="card__button" type="button" value={this.props.button} />
                        </form>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Card;