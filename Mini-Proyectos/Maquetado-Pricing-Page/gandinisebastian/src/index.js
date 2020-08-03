import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Cards from './components/cards.js';
import MainTitle from './components/mainTitle.js';
import './assets/fonts/Roboto/Roboto-Bold.ttf'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainTitle />
    <Cards />
     <Footer />
 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
