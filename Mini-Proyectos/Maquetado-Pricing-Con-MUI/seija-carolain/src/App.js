import React from "react";
import { AppBar } from "@material-ui/core";
import NavBar from "./Components/NavBar";

import Card from "./Components/Card";
import CardList from "./Components/CardList";
import Footer from "./Components/Footer";
import MainTitle from './Components/MainTitle';

function App() {
  return (
    <div>
      <NavBar
        linkOne="FEATURES"
        linkTwo="ENTERPRISE"
        linkThree="SUPPORT"
        nameCompany="Company name"
      />
      <MainTitle/>
      <div className="cards-root">
        <Card
          titleCard="Free"
          pricing="$0"
          descriptionOne="10 users included"
          descriptionTwo="2 GB of storage"
          descriptionThree="Help center access"
          descriptionFour="Email support"
          textButton="SIGN UP FOR FREE"
        />
        <Card
          titleCard="Pro"
          pricing="$15"
          descriptionOne="20 Users included"
          descriptionTwo="10 GB of storage"
          descriptionThree="Help center access"
          descriptionFour="Priority email support"
          textButton="GET STARTED"
        />
        <Card
          titleCard="Enterprise"
          pricing="$30"
          descriptionOne="50 users included"
          descriptionTwo="30 GB of storage"
          descriptionThree="Help center access"
          descriptionFour="Phone & email support"
          textButton="CONTACT US"
        />
      </div>
      <Footer />
    </div>
    
  );
}

export default App;
