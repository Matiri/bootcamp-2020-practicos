import React from 'react';
import  '../Styles/Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className='container-principal-nav'>
                
                <h4>Company name</h4>

                <nav className='navigation'>
                    <ul>
                        <li><a href='#'>FEATURES</a></li>
                        <li><a href='#'>ENTERPRISE</a></li>
                        <li><a href='#'>SUPPORT</a></li>
                        <li><button className='button-nav'>Login</button></li>
                    </ul>
                    
                </nav>
            </div>
        )
            
        
    }
}
export default Navbar;
