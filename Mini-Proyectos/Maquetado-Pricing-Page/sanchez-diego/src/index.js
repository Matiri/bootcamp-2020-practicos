import React from 'react';
import ReactDOM from 'react-dom';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
//import $ from 'jquery';
//import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//CSS
import './index.css';
import App from './App';
//JSX with HTML
import MainTitle from './components/MainTitle';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';
//SERVICEWORKER
import * as serviceWorker from './serviceWorker';



ReactDOM.render(
  <React.StrictMode>
    <NavBar name="Company Name"/>
    <MainTitle />
    <div className="component">
      <div className="row d-flex justify-content-center text-aling-center">
        <div className="col-3-md">
          <Card cardTitle="Free" price="0" card__paragraph="10 users included 2 GB of storage Help center access Email support" button="SING UP FOR FREE"/>
        </div>
        <div className="col-3-md">
          <Card className="card__button-2" cardTitle="Pro" cardTitleParagraph="Most Popular" price="15" card__paragraph="20 users included 10 GB of storage Help center access Priority email support" button="GET STARTED"/>
        </div>
        <div className="col-3-md">
          <Card cardTitle="Enterprice" price="30" card__paragraph="50 users included 30 GB of storage Help center access Phone & email support" button="CONTACT US"/>
        </div>
      </div>
    </div>
    <div className="footer_box">
      <Footer />
    </div>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
