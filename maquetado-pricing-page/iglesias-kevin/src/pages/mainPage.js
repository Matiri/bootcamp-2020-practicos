/* React */
import React from 'react';
/* Components */
import Title from '../components/mainTitle.js';
import Navbar from '../components/navBar.js';
import Footer from '../components/footer.js';
import Cards from '../components/cards.js';
/* Styles */
import '../assets/css/styles.css';
/* Boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Pricing() {
  return (
    <body>
      <Navbar/>
      <Title pageTitle="Pricing" pageDescription="Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization"/> 
        <div className="row">
          <Cards cardTitle="Free" suscriptionPrice="$0" usersIncluded="10 users included" totalStorage="2 GB of storage" emailSupport="Email support" centerHelpAccs="Help center access" buttonTypeMsj="SIGN UP FOR FREE"/>
          <Cards cardTitle="Pro" suscriptionPrice="$15" usersIncluded="20 users included" totalStorage="10 GB of storage" emailSupport="Priority email support" centerHelpAccs="Help center access" buttonTypeMsj="GET STARTED"/>
          <Cards cardTitle="Enterprise" suscriptionPrice="$30" usersIncluded="50 users included" totalStorage="30 GB of storage" emailSupport="Email support" centerHelpAccs="Phone & email support" buttonTypeMsj="CONTACT US"/>
        </div>
        <Footer/>
    </body>
  );
}

export default Pricing;
