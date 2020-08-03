import React from 'react';
import './app.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navBar.jsx'
import SimpleCard from './componentes/card.jsx'
import Footer from './componentes/footer'

function App() {
  return (
  <div>
    <div className="navDiv">
      <nav>
        <NavBar 
        itemNav1 ="olaaaa" 
        itemNav2 ="olaaaa" 
        itemNav3 ="olaaaa"/>
      </nav>
    
    </div>
    <div className="main">
      <h1 className="MuiTypography-root MuiTypography-h2 MuiTypography-colorTextPrimary MuiTypography-gutterBottom MuiTypography-alignCenter">
        Pricing
      </h1>
      <p className="MuiTypography-root MuiTypography-h5 MuiTypography-colorTextSecondary MuiTypography-alignCenter">
      Quickly build an effective pricing table for your potential 
      <br></br>
      customers with this layout. It's built with default
      <br></br>
      Material-UI components with little customization.
      </p>
    </div>

      <div className="row">
      <div className="col">
      <SimpleCard 
      title ="Free"
      price ="0"
      itemList1 ="10"
      itemList2 ="2"
      itemList3 =""
      buttonContent ="sign up for free" />
      </div>


      <div className="col">
      <SimpleCard 
      title ="Pro"
      price ="15"
      itemList1 ="20"
      itemList2 ="10"
      itemList3 ="Priority"
      buttonContent ="Get Starter"
      proCardButton="proCardButtton" />
      </div>

      <div className="col">
      <SimpleCard 
      title ="Enterprise"
      price ="30"
      itemList1 ="50"
      itemList2 ="30"
      itemList3 ="Phone & "
      buttonContent ="sign up for free" />
      </div>
    </div>
    <Footer />
</div>
  );
}

export default App;

