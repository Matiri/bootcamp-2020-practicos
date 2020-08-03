import React from 'react';
import '../assets/css/styles.css'

class Footer extends React.Component {
    render() {
      return(
        <div className="container footerMain">
          <footer className="pt-4 my-md-5 pt-md-5 border-top ">
          <div className="row mainList_footer">
          <div className="col-6 col-md">
            <h5 className='title_footer'>Company</h5>
            <ul className="list-unstyled text-small">
              <li><a className="textList_footer" href="#">Team</a></li>
              <li><a className="textList_footer" href="#">History</a></li>
              <li><a className="textList_footer" href="#">Contact us</a></li>
              <li><a className="textList_footer" href="#">Locations</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className='title_footer'>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a className="textList_footer" href="#">Cool stuff</a></li>
              <li><a className="textList_footer" href="#">Random feature</a></li>
              <li><a className="textList_footer" href="#">Team feature</a></li>
              <li><a className="textList_footer" href="#">Developer stuff</a></li>
              <li><a className="textList_footer" href="#">Another one</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className='title_footer'>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a className="textList_footer" href="#">Resource</a></li>
              <li><a className="textList_footer" href="#">Resource name</a></li>
              <li><a className="textList_footer" href="#">Another resource</a></li>
              <li><a className="textList_footer" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className='title_footer'>Legal</h5>
            <ul class="list-unstyled text-small">
              <li><a className="textList_footer" href="#">Privacy policy</a></li>
              <li><a className="textList_footer" href="#">Terms of use</a></li>
            </ul>
          </div>
        </div>
        <p className="Copyright_footer">Copyright © <a className="Copyright_footer" href='#'>Your Website</a> 2020.</p>
          </footer>
        </div>
        )
    }
  }
  

export default Footer;
