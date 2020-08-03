import React from 'react';
import Card from "../components/Card"
import Titulo from '../components/Titulo';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

class Page extends React.Component {
    render(){
        return(
            <div>
                <Navbar />
                <Titulo Titulo="Pricing" Descripcion="Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization."/>
                <div className="row justify-content-center m-0">
                    <div className="m-3 p-3">
                        <Card category="Free" price="0" numero="10" gigas="2" contact="Email support" button="SING UP FOR FREE"/>
                    </div>
                    <div className="m-0">
                        <Card category="Pro" textSmall="Most popular" tamañoTitulo="tamañoTitulo" price="15" numero="20" gigas="10" contact="Priority email support" button="GET STARTED" btnEfect="btnColor"/>
                    </div>
                    <div className="m-3 p-3">
                        <Card category="Enterprise" price="30" numero="50" gigas="30" contact="Phone & email support" button="CONTACT US"/>
                    </div>
                </div>
                <div className="row justify-content-center m-0">
                    <div className="col-2 p-0">
                        <Footer titles="Company" link1="Team" link2="History" link3="Contact us" link4="Locations"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer titles="Features" link1="Cool stuff" link2="Random feature" link3="Team feature" link4="Developer stuff" link5="Another one"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer titles="Resources" link1="Resource" link2="Resource name" link3="Another resource" link4="Final resource"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer titles="Legal" link1="Privacy policy" link2="Terms of use" link3="" link4="" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Page;