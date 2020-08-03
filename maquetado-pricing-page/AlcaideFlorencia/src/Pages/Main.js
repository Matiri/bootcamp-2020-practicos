import React from 'react';
import '../Styles/Main.css'
import Navbar from '../Components/Navbar';
import MainTitle from '../Components/MainTitle';
import MainCard from '../Components/MainCard';
import Footer from '../Components/Footer';
 


class Main extends React.Component{
    render(){
        return(
            <div className='container-page'>
                <Navbar/>
                <MainTitle/>
                <div className='container-card'>
                <MainCard/>
                </div>
                <div className='container-foot'>
                <Footer/>
                </div>
            </div>
            
        )
    }
}

export default Main;
