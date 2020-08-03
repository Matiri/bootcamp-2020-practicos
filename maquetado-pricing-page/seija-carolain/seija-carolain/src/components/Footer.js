import React from 'react';
import CardList from './CardList';
import 'bootstrap/dist/css/bootstrap.min.css';

//creo mi componente
 class Footer extends React.Component{
     render(){
         return (
            <div class="FooterPag">
                <div className="row">
                    <div className="col-12">
                    <div class="CardList">
                   <CardList
                   CardListFooter="CardListFooter ml-5 mr-5"
                   CardListTitle="Company"
                   contentOne="Team"
                   contentTwo="History"
                   contentThre="Conctact us"
                   contentFour="Locations"
                   />
                   <CardList
                   CardListTitle="Features"
                   contentOne="Cool stuff"
                   contentTwo="Random feature"
                   contentThre="Team feature"
                   contentFour="Devolper stuff"
                   contentFive="Another one"
                   />
                   <CardList
                   CardListTitle="Resources"
                   contentOne="Resource"
                   contentTwo="Resource name"
                   contentThre="Another resouce"
                   contentFour="Final resource"
                   
                   />
                   <CardList
                   CardListTitle="Legal"
                   contentOne="Privacy policy"
                   contentTwo="Terms of use"
                   />
                </div>
                <div class="CopyrightText">
                <p5>Copyright © <a class="CopyrigthLink" href="#">Your Website</a> 2020.</p5>
                </div>
            </div>
                    </div>
                </div>

                
         );
     }
 }
 export default Footer;