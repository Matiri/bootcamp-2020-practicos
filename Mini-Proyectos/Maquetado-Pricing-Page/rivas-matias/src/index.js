import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Cards, ProCard} from './components/Cards';
import Text from './components/Text';
import Footer from './components/Footer';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <div>
      <Header
      companyName = 'Company name'
      link1 = 'FEATURES'
      link2 = 'ENTERPRISE'
      link3 = 'SUPPORT'
      buttonLink = 'Login' />

      <Text />

      <Cards 
      cardTitle = 'Free'
      cardPrice = '$0'
      item1 = '10 users included'
      item2 = '2 GB of storage'
      item3 = 'Help center access' 
      item4 = 'Email support'
      button = 'SIGN UP FOR FREE' />

      <ProCard 
      cardTitle = 'Pro'
      mostPopular = 'Most Popular'
      cardPrice = '$15'
      item1 = '20 users included'
      item2 = '10 GB of storage'
      item3 = 'Help center access'
      item4 = 'Priority email support'
      mostPopularBtn = 'GET STARTED' />

      <Cards
      cardTitle = 'Enterprise'
      cardPrice = '$30'
      item1 = '50 users included'
      item2 = '30 GB of storage'
      item3 = 'Help center access'
      item4 = 'Phone & email support'
      button = 'Contact us' />
      <div className = 'listSegment'>
        <Footer 
          columnFirst = 'Company'
          item1 = 'Team'
          item2 = 'History'
          item3 = 'Contact'
          item4 = 'Locations' />
        <Footer 
          columnFirst = 'Features'
          item1 = 'Cool stuff'
          item2 = 'Random feature'
          item3 = 'Team feature'
          item4 = 'Developer stuff'
          item5 = 'Another one' />
        <Footer 
          columnFirst = 'Resources'
          item1 = 'Resource'
          item2 = 'Resource name'
          item3 = 'Another resource'
          item4 = 'Final resource' />
        <Footer 
          columnFirst = 'Legal'
          item1 = 'Privacy policy'
          item2 = 'Terms of service' />
        <p className = 'copyright'>Copyright @ <a href = '#' className = 'myWebsite'>Your Website</a> 2020</p>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>

  </React.StrictMode>,
  document.getElementById('footer')
);
/*
ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById('footer')
);*/
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/*
  <Text />


  Free
  <Cards 
    cardTitle = 'Free'
    cardPrice = '$0'
    item1 = '10 users included'
    item2 = '2 GB of storage'
    item3 = 'Help center access' 
    item4 = 'Email support'
    button = 'SIGN UP FOR FREE' />


    Pro - INCOMPLETE
    <ProCard 
    cardTitle = 'Pro'
    mostPopular = 'Most Popular'
    cardPrice = '$15'
    item1 = '20 users included'
    item2 = '10 GB of storage'
    item3 = 'Help center access'
    item4 = 'Priority email support'
    mostPopularBtn = 'GET STARTED'
     />

    Footer - INCOMPLETE
    <div className = 'listSegment'>
    <Footer 
      columnFirst = 'Company'
      item1 = 'Team'
      item2 = 'History'
      item3 = 'Contact'
      item4 = 'Locations' />
    <Footer 
      columnFirst = 'Features'
      item1 = 'Cool stuff'
      item2 = 'Random feature'
      item3 = 'Team feature'
      item4 = 'Developer stuff'
      item5 = 'Another one' />
    <Footer 
      columnFirst = 'Resources'
      item1 = 'Resource'
      item2 = 'Resource name'
      item3 = 'Another resource'
      item4 = 'Final resource' />
    <Footer 
      columnFirst = 'Legal'
      item1 = 'Privacy policy'
      item2 = 'Terms of service' />
    <p className = 'copyright'>Copyright @ <a href = '#' className = 'myWebsite'>Your Website</a> 2020</p>
  </div>
*/