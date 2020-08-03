import React from 'react';
import '../styles/footer.css';

function Footer(){
    return(
        <footer className="main">
            <hr id="hr"></hr>
            <div className="main-contain">
                <div>
                    <p className="list-title">Company</p>
                    <ul>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Locations</a></li>
                    </ul>
                </div>
                <div>
                    <p className="list-title">Features</p>
                    <ul>
                        <li><a href="#">Cool stuff</a></li>
                        <li><a href="#">Random feature</a></li>
                        <li><a href="#">Team feature</a></li>
                        <li><a href="#">Developer stuff</a></li>
                        <li><a href="#">Another one</a></li>
                    </ul>
                </div>
                <div>
                    <p className="list-title">Resource</p>
                    <ul>
                        <li><a href="#">Resource</a></li>
                        <li><a href="#">Resource name</a></li>
                        <li><a href="#">Another resource</a></li>
                        <li><a href="#">Final resource</a></li>
                    </ul>
                </div>
                <div>
                    <p className="list-title">Legal</p>
                    <ul>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of use</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright © Your Website 2020</p>
            </div>
        </footer>
    )
}

export default Footer;