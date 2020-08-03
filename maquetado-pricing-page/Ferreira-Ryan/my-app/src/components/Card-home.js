import React from 'react';
import '../styles/cards.css';

function CardHome() {
    return(
        <div className="cards-contain" >
            <div className="card-left card">
                <div className="text-top">
                    <h2>Free</h2>
                </div>
                <div className="text-in">
                    <p className="price">$0/mo</p>
                    <div><p>20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>    
                    <div><p>Priority email  support</p></div>
                </div>
                <div className="btn-contain">
                    <button className="btn">SIGN UP FOR FREE</button>
                </div>
            </div>
            <div className="card">
                <div className="text-top">
                    <div class="card-middle">
                        <div>
                            <h2 id="h2">Pro</h2>
                            <p>Most popular</p>
                        </div>
                        <img src="https://img.icons8.com/windows/22/000000/star.png"/>
                    </div>
                </div>
                <div className="text-in">
                    <p className="price">$15/mo</p>
                    <div><p> 20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>
                    <div><p>Priority email  support</p></div>
                </div>
                <div className="btn-contain">
                    <button className="btn btn-pro">GET STARTED</button>
                </div>
            </div>
            <div className="card-right card">
                <div className="text-top">
                    <h2>Enterprise</h2>
                </div>
                <div className="text-in">
                    <p className="price">$15/mo</p>
                    <div><p>20 users included</p></div>
                    <div><p>10 GB of storage</p></div>
                    <div><p>Help center access</p></div>
                    <div><p>Priority email  support</p></div>
                </div>
                <div className="btn-contain">
                    <button className="btn">CONTACT US</button>
                </div>
            </div>
        </div>
    )
}

export default CardHome;