import React from 'react';
import NavBar from '.././components/NavBar';
import Card from '.././components/Card';
import Msg from '.././components/Msg';
import Footer from '.././components/Footer';
import License from '.././components/License';
import '.././styles/App.css';

function App() {
    return (
    <div className="main-container">
      <NavBar />
      <div className="container">
          <Msg/>
          <div className="row text-center align-items-end">
            <Card price="0"   type="Free"/>
            <Card price="15"  type="Pro"  popular="1"/>
            <Card price="30"  type ="Enterprise"/>  
          </div>
          <Footer/>
          <License /> 
        </div>
    </div>
    );
  }
  export default App;








 


