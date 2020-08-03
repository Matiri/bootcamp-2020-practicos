import React from "react";
import "../styles/Navbar.css";


class Navbar extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-light bg-light border-bottom">
                <a class="navbar-brand">Company name</a>
                <div class="navbar">
                    <ul class="nav justify-content-end">
                        <li>
                            <a class="navbar text-dark" href="#">FEATURES</a>
                        </li>
                        <li>
                            <a class="navbar text-dark" href="#">ENTERPRISE</a>
                        </li>
                        <li>
                            <a class="navbar text-dark" href="#">SUPPORT</a>
                        </li>
                        <button type="button" class="btn btn-primary btn-sm">LOGIN</button>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;








