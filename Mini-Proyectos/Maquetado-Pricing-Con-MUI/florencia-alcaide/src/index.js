import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/Navbar';
import MainTitle from './Components/MainTitle'
import PageCard from './Components/PageCard'
import PageFooter from './Components/PageFooter';

ReactDOM.render(
  <React.StrictMode>
    <Navbar title='Company name'/>
    <MainTitle/>
  
    <PageCard/>
    <PageFooter/>
  
    
  </React.StrictMode>,
  document.getElementById('root')
);

