import React from 'react';
import '../styles/CardList.css';

class CardList extends React.Component {
    render(){
        return(
            <div>
                <ul className="cardList__box">
                    <h5>{this.props.cardList__title}</h5>
                    <li><a className="cardList__link" href="#">{this.props.cardList1}</a></li>
                    <li><a className="cardList__link" href="#">{this.props.cardList2}</a></li>
                    <li><a className="cardList__link" href="#">{this.props.cardList3}</a></li>
                    <li><a className="cardList__link" href="#">{this.props.cardList4}</a></li>
                    <li><a className="cardList__link" href="#">{this.props.cardList5}</a></li>
                </ul>
            </div>
        )
    }
}

export default CardList;