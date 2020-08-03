import React from 'react';

const NavBar  = (props) => {
    return  <div class="NavBar">
    <h6 class="NameLogo">
       {props.name}
   </h6>
<nav class="NavBar-Links">
    <a class="NavBar-Link" href="#">FEATURES</a>
    <a class="NavBar-Link" href="#">ENTERPRISE</a>
    <a class="NavBar-Link" href="#">SUPPORT</a>
    <a class="NavBar-Link-Login" href="#">LOGIN</a>
</nav>
</div>
}
export default NavBar;