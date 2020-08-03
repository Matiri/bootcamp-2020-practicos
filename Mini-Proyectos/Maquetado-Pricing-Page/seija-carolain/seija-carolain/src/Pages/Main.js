import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from '../serviceWorker';
import NavBar from '../components/NavBar.js';
import '../assets/css/NavBar.css'
import MainTitle from '../components/MainTitle';
import '../assets/css/MainTitle.css';
import '../components/Card.js';

import Footer from '../components/Footer.js';
import '../assets/css/Footer.css';
import '../assets/css/CardList.css';
import '../assets/css/Card.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card.js';


function Main() {
  return (
<div>
<NavBar 
    name ="Company name"
    /> 
    <MainTitle />
    <div className="container-fluid TheCards ">
        <div className="row d-flex justify-content-center text-aling-center">
        <div className="col-3">   
    <Card       
        nametitle="TitleCard"      
        classMain="Cards"
        class="TextButton"
       CardName = "Free"
       contentPrice="$0"
       contentDescOne="10 users included"
       contentDescTwo="2 GB of storage"
       contentDescThre="Help center access"
       contentDescFour="Email support"
       content = "SIGN UN FOR FREE"
    />
    </div>
    <div className="col-3">   
     <Card
       nametitle="TitleCarddif"
        iconstart="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
       classMain="CardDifferent"
       class="TextButtonDos"
       contentPrice="$15"
       CardName = "Pro"
       classContentParraph="ContentParraph"
       contentParraph="Most popular"
       contentPrice="$15"
       contentDescOne="20 users included"
       contentDescTwo="10 GB of storage"
       contentDescThre="Help center access"
      contentDescFour="Priority email support"
      content = "GET STARTED"
    />
    </div>
    <div className="col-3">   
     <Card
       nametitle="TitleCard"
       classMain="Cards"
       class="TextButton"
       CardName = "Enterprise"
       contentPrice="$30"
       contentDescOne="50 users included"
       contentDescTwo="30 GB of storage"
       contentDescThre="Help center access"
       contentDescFour="Phone & email support"
       content = "CONCTACT US"
    />
    </div>
    </div>
    </div>
    <div className="container-fluid">
        <div className="row d-flex justify-content-center">
           <Footer />
        </div>
    </div>
</div>
   
  );
}

export default Main;
