import React from 'react';
import './../assets/styles/NavBar.css'

class NavBar extends React.Component {
    render(){
        return(
            <div>
                <nav>
                    <div className="main__NavBar-div">
                        <ul>
                            <li className="NavBar__first-element ">Company Name</li>
                            <div className="NavBar__last-elements-div">
                                <li className="NavBar__li-elements" ><a href="#" className="NavBar__last-elements">FEATURES</a></li>
                                <li className="NavBar__li-elements" ><a href="#" className="NavBar__last-elements">ENTERPRICE</a></li>
                                <li className="NavBar__li-elements" ><a href="#" className="NavBar__last-elements">SUPPORT</a></li>
                                <li className="NavBar__li-elements" >
                                    <form action="" className="NavBar__form">
                                        <button type="button" className="NavBar__button">LOGIN</button>
                                    </form>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;