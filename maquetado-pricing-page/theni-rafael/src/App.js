import React from 'react';
import Card from './components/Card';
import favImg from './img/fav.png';
import './App.css';

const card1 = { title: "Free", imgsrc:"", text1: "", price: "0", text2: "10 users included 2 GB of storage Help center access Email support", button: "SIGN UP FOR FREE", classBtnNam:"cardBtnEmpty cardBtn cardBtnFree", classNam:"cardFree cardContainer"}
const card2 = { title: "Pro", imgsrc:{favImg}, text1: "Most Popular", price: "15", text2: "20 users included 10 GB of storage Help center access Priority email support", button: "GET STARTED", classBtnNam:"cardBtnFull cardBtn", classNam:"cardPro cardContainer"}
const card3 = { title: "Enterprise", imgsrc:"", text1: "", price: "30", text2: "50 users included 30 GB of storage Help center access Email support", button: "CONTACT US", classBtnNam:"cardBtnEmpty cardBtn cardBtnEnter", classNam:"cardEnter cardContainer"}


function App() {
  return (
    <div>
      <header>
        <p className="headerTitle">Company name</p>
        <div className="headerLinks">
          <a href="#" className="headerLink"><p className="headerLinkItem">FEATURES</p></a>
          <a href="#" className="headerLink"><p className="headerLinkItem">ENTERPRISE</p></a>
          <a href="#" className="headerLink"><p className="headerLinkItem headerLinkItemLast">SUPPORT</p></a>
          <input type="button" value="LOGIN" href="#" className="headerLinkBtn"></input>
        </div>
      </header>
      <h1 className="contentTitle">Pricing</h1>
      <h2 className="contentSubtitle">Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.</h2>
      <div className="contentCardsContainer">
      <Card title={card1.title} price={card1.price} text2={card1.text2} button={card1.button} classNam={card1.classNam} classBtnNam={card1.classBtnNam}/>
      <Card title={card2.title} imgsrc={card2.imgsrc} price={card2.price} text1={card2.text1} text2={card2.text2} button={card2.button}  classNam={card2.classNam} classBtnNam={card2.classBtnNam}/>
      <Card title={card3.title} price={card3.price} text2={card3.text2} button={card3.button} classNam={card3.classNam} classBtnNam={card3.classBtnNam}/>
      </div>
      <footer>
        <div className="footerColumnsContainer">
          <ul>
            <h3>Company</h3>
            <a href="#"><li>Team</li></a>
            <a href="#"><li>History</li></a>
            <a href="#"><li>Contact us</li></a>
            <a href="#"><li>Locations</li></a>
          </ul>
          <ul>
            <h3>Features</h3>
            <a href="#"><li>Cool stuff</li></a>
            <a href="#"><li>Random feature</li></a>
            <a href="#"><li>Team feature</li></a>
            <a href="#"><li>Developer stuff</li></a>
            <a href="#"><li>Another one</li></a>
          </ul>
          <ul>
            <h3>Resources</h3>
            <a href="#"><li>Resource</li></a>
            <a href="#"><li>Resource name</li></a>
            <a href="#"><li>Another resource</li></a>
            <a href="#"><li>Final resource</li></a>
          </ul>
          <ul>
            <h3>Legal</h3> 
            <a href="#"><li>Privacy policy</li></a>
            <a href="#"><li>Terms of use</li></a>
          </ul>
        </div>
        <p>Copyright © <a href="#">Your Website</a> 2020.</p>
      </footer>
    </div>
    );
}

export default App;
