import React from 'react';
import './../assets/styles/CardList.css'

class CardList extends React.Component {
    render(){
        return(
            <div>
                <ul>
                    <div className="CardList__first-div">
                        <li className="CardList__title">{this.props.FooterTitle}</li>
                        <li><a className="CardList__li-elements" href="#">{this.props.firstElement}</a></li>
                        <li><a className="CardList__li-elements" href="#">{this.props.secondElement}</a></li>
                        <li><a className="CardList__li-elements" href="#">{this.props.thirdElement}</a></li>
                        <li><a className="CardList__li-elements" href="#">{this.props.fourthElement}</a></li>
                        <li><a className="CardList__li-elements" href="#">{this.props.fifthElement}</a></li>
                    </div>
                </ul>
                <p className="CardList__copyright">{this.props.copyright}</p>
            </div>
        )
    }
}
export default CardList;