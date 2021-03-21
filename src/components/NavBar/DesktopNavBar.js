import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

function DesktopNavBar() {

    return (
    <>
        <div className="top-bar">
        <div className="logo-container">
            <NavLink to="/" className="logo" >
                YARD
            </NavLink>
        </div>

        <nav className="navbar">
            <ul className="desktopNav">
                <li className="nav-item" key="d-work">
                    <NavLink to="/work" activeClassName="active" className="nav-links">
                        Work
                    </NavLink>
                </li>
                <li className="nav-item" key="d-services">
                    <NavLink to="/services" activeClassName="active" className="nav-links">
                        Services
                    </NavLink>
                </li>
                <li className="nav-item" key="d-about">
                    <NavLink to="/about" activeClassName="active" className="nav-links">
                        About
                    </NavLink>
                </li>
                
                <li className="nav-item" key="d-contact">
                    <NavLink to="/contact" activeClassName="active" className="nav-links">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
        </div>
    </>
    )
}

export default DesktopNavBar;