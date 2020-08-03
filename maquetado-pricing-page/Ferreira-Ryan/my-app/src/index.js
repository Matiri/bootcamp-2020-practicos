import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

// IMPORT COMPONENTS

import MainTitle from './components/main-title';
import NavBar from './components/NavBar';
import Cards from './components/Card-home';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
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