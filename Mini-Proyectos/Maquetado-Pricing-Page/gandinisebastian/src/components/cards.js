import React from 'react';
import '../assets/css/styles.css'

class Cards extends React.Component {
    render() {
      return(
        <div className="container main_Cards">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal mainText_card">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4 cards_parraf">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Help center access</li>
              <li>Email support</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary firstButton_cards">SIGN UP FOR FREE</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal mainText_card">Pro</h4>
            <h6 className="my-0 font-weight-normal">Most Popular</h6>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4 cards_parraf">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Help center access</li>
              <li>Priority email support</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary secondButton_cards">GET STARTED</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal mainText_card">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4 cards_parraf">
              <li>50 users included</li>
              <li>30 GB of storage</li>
              <li>Help center access</li>
              <li>Phone & email support</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary firstButton_cards">CONTACT US</button>
          </div>
        </div>
      </div>
      </div>
        )
    }
  }
  

export default Cards;
