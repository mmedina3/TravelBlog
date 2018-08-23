import React, { Component } from 'react';
// eslint-disable-next-line
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './Navbars.css';

class Navbars extends Component {

    render() {
        return (
            <div className="navbars">
                <Navbar fluid fixedTop collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a className="navbars" href="/">M²</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight className="navbars">
                            <NavItem eventKey={2} href="#about"
                            > About &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>
                            <NavItem eventKey={3} href="#projects"
                            > North America &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                            <NavItem eventKey={4} href="https://drive.google.com/file/d/1kaqLZUinCB2nunpGNKG1qYYol8NPFdTV/view?usp=sharing" target="_blank"
                            > South America &nbsp;&nbsp;&nbsp;&nbsp;|
                </NavItem>

                            <NavItem eventKey={5} href="#connect"
                            > Europe &nbsp;&nbsp;&nbsp;&nbsp;
                </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        );
    }
};

export default Navbars;
