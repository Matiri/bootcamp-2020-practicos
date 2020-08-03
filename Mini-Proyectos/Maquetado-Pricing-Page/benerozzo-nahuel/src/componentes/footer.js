import React from 'react';
import CardList from './cardList';
import './../styles/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Footer extends React.Component{
    render(){
        return(
            <div className="footerBg container">
                <footer className="footer">

                    <div className="inlineBlock listDiv col-3">
                        <a href="#" className="decNone listLink ">
                        {<CardList 
                            cardListTitle=" Company "
                            cardFirstList=" Team "
                            cardSecondList=" History "
                            cardThirdList=" Contact us "
                            cardFourthList=" location "
                            cardFifthList="" />}
                        </a>
                    </div>

                    <div className="inlineBlock listDiv col-3">
                        <a href="#" className="decNone listLink">
                        {<CardList 
                            cardListTitle=" Features "
                            cardFirstList=" Cool Stuff "
                            cardSecondList=" Random feature "
                            cardThirdList=" Team feature "
                            cardFourthList=" Developer Stuff "
                            cardFifthList=" Another one " />}
                        </a>
                    </div>

                    <div className="inlineBlock listDiv col-3">
                    <a href="#" className="decNone listLink">
                    {<CardList 
                        cardListTitle=" Resource "
                        cardFirstList=" Resource name "
                        cardSecondList=" Another resource "
                        cardThirdList=" Final resource "
                        cardFourthList=""
                        cardFifthList="" />}
                    </a>
                    </div>

                    <div className="inlineBlock listDiv col-3">
                    <a href="#" className="decNone listLink"> 
                    {<CardList 
                        cardListTitle=" Legal "
                        cardFirstList=" Privacy policy "
                        cardSecondList=" Terms of use "
                        cardThirdList=""
                        cardFourthList=""
                        cardFifthList="" />}
                    </a>
                    </div>
                    <div className="positCopyText">
                    <p className="copyDec">Copyright © <a href="#" className="decLinkNone">{this.props.copyright} </a>2020.</p>
                    </div>
                </footer>
                
            </div>
        )
    }
}
export default Footer;