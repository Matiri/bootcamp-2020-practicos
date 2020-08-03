import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
    render() {
        const url = 'aaa';
        return (
            <footer class="pt-4 my-md-5 pt-md-5 border-top">
                <div class="row">
                    <div class="col-12 col-md">
                        <div class="col-6 col-md">
                            <h5>{this.props.titles}</h5>
                            <ul class="list-unstyled text-small">
                                <li><a class="text-muted" href="#">{this.props.link1}</a></li>
                                <li><a class="text-muted" href="#">{this.props.link2}</a></li>
                                <li><a class="text-muted" href="#">{this.props.link3}</a></li>
                                <li><a class="text-muted" href="#">{this.props.link4}</a></li>
                                <li><a class="text-muted" href="#">{this.props.link5}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;
