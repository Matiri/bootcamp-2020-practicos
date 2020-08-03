import React from 'react';
import './../styles/page.css';
import MainTitle from './../componentes/MainTitle';
import Card from './../componentes/Card';
import NavBar from './../componentes/NavBar';
import Footer from './../componentes/footer';

class Page extends React.Component{
    render(){
        return(
            <div>
                <div className="positionNavBar">
                    {<NavBar
                    companyName=" Company Name " 
                    navFeatures=" features " 
                    navEnterprise=" enterprise " 
                    navSupport=" support " 
                    navButtonText=" login "/>}
                </div>

            <div className="positionMainTitle">
                {<MainTitle 
                mainTitle=" Pricing "
                />}
            </div>
                
            <div className="positionCard">
                <div className="row">
                    <div className="col">{<Card 
                        precio=" 0 " 
                        user="10" 
                        storage="2" 
                        support="" 
                        button="sign up for free" 
                        titleCard="Free" />}
                    </div>

                    <div className="col">
                        {<Card 
                        precio=" 15 " 
                        user="20" 
                        storage="10" 
                        support="Priority" 
                        button="sign up for free" 
                        titleCard="Pro"
                        mostPopular="most popular"
                        proClass="proCard" />}
                    </div>

                    <div className="col">
                        {<Card 
                        precio=" 30 " 
                        user="50" 
                        storage="30" 
                        support="Phone & " 
                        button="sign up for free" 
                        titleCard="Enterprise" />}
                    </div>
                </div>
            </div>

            <div className="positionFooter">
                {<Footer copyright="Your Website"/>}
            </div>  
        </div>
        )
    }
}
export default Page;