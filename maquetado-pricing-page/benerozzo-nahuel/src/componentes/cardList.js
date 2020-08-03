import React from 'react';
import './../styles/cardList.css';

class CardList extends React.Component{
    render(){
        return(
            <div className="cardListDiv">
                <h6 className="cardListTitle">
                    {this.props.cardListTitle}
                </h6>
                <ul className="cardListUl">
                    <li className="cardFirstList">{this.props.cardFirstList}</li>
                    <li className="cardSecondList">{this.props.cardSecondList}</li>
                    <li className="cardThirdList">{this.props.cardThirdList}</li>
                    <li className="cardFourthList">{this.props.cardFourthList}</li>
                    <li className="cardFifthList">{this.props.cardFifthList}</li>
                </ul>
            </div>
    )
    }
}
        
    

export default CardList;