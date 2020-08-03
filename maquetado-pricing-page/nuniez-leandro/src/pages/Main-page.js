import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Card from '../components/Card';
import Footer from '../components/Footer';

class MainPage extends React.Component {
    render(){
        return(
            <div>
                <Header />
                <Title />
                <div className="row justify-content-center m-0">
                    <div className="m-3 p-3">
                        <Card title="Free" price="0" users="10" gigas="2" email="Email" content="SING UP FOR FREE" head="card-title"/>
                    </div>
                    <div className="">
                        <Card title="Pro" small="Most Popular" price="15" users="20" gigas="10" email="Priority email" content="GET STARTED" idBtn="button" head="card-great-title"/>
                    </div>
                    <div className="m-3 p-3">
                        <Card title="Enterprise" price="30" users="50" gigas="30" email="Phone & email" content="CONTACT US" head="card-title"/>
                    </div>
                </div>
                <div className="row justify-content-center m-0">
                    <div className="col-2 p-0">
                        <Footer title="Company" link1="Team" link2="History" link3="Contact us" link4="Locations"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Features" link1="Cool stuff" link2="Random feature" link3="Team feature" link4="Developer stuff" link5="Another one"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Resource" link1="Resource" link2="Resource name" link3="Another resource" link4="Final resource"/>
                    </div>
                    <div className="col-2 p-0">
                        <Footer title="Legal" link1="Privacy policy" link2="Terms of use"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;