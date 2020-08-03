import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// IMPORTAR COMPONENTES
import MainTitle from './components/MainTitle.js';
import NavBar from './components/NavBar';
import Card from './components/Card';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <MainTitle />
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-3">
          <Card title="Free" price="$0/mo" paragraph="10 users included 2 GB of storage, Help center access and Email support" button="SIGN UP FOR FREE"/>
        </div>
        <div className="col-3">
          <Card class="TextButton" title="Pro" MostPopular="Most Popular" price="$15/mo" paragraph="20 users included 10 GB of storage, Help center access and Priority email support" button="GET STARTED"/>
        </div>
        <div className="col-3">
          <Card title="Enterprise" price="$30/mo" paragraph="50 users included 30 GB of storage, Help center access, Phone & email support" button="CONTACT US"/>
        </div>
        
      </div>
      
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
