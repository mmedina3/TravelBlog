import React, { Component } from 'react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <footer id='connect'>
                <h1><a href="mailto:medina.m1016@gmail.com" target="_top"><b>Let's Connect!</b></a></h1><br />
                <div id="footer-links">
                    <a href="https://github.com/mmedina3" rel="noopener noreferrer" target="_blank"><img src={require("../image/github.png")} alt="Github Link" /></a>
                    <a href="https://www.linkedin.com/in/michellemed/" rel="noopener noreferrer" target="_blank"><img src={require("../image/linkedin.png")} alt="Linkedin Link" /></a>
                    <a href="https://twitter.com/mmed1na" rel="noopener noreferrer" target="_blank"><img src={require("../image/twitter.png")} alt="Twitter Link" /></a>
                </div>
                <br />
                <p>Made by Michelle Medina ✌🏽 </p>
            </footer>
        );
    }
}

export default Footer;