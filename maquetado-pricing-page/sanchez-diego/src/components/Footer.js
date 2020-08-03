import React from 'react';
import '../styles/Footer.css';
import CardList from './CardList';

class Footer extends React.Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="footer__box">
                        <CardList cardList__title="Company" cardList1="Team" cardList2="History" cardList3="Contact us" cardList4="Locations"/>
                        <CardList cardList__title="Features" cardList1="Cool stuff" cardList2="Random feature" cardList3="Team feature" cardList4="Developer stuff" cardList5="Another one"/>
                        <CardList cardList__title="Resources" cardList1="Resource" cardList2="Resource name" cardList3="Another resource" cardList4="Final resource"/>
                        <CardList cardList__title="Legal" cardList1="Privacy policy" cardList2="Terms of use"/>
                    </div>
                </div>
                <p className="footer__copyright">Copyright <a className="footer__copyright-link" href="https://material-ui.com/">© Your Website</a> 2020.</p>
            </div>
        )
    }
}

export default Footer;