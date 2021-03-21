import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.scss';

function Footer() {
    return (
        <div className="footer-container">

            <div className="footer-logo">
                <NavLink to='/' className="footer-logo">YARD</NavLink>
            </div>

            <div className="copyright">
                <p className="fineprint">©2021 YARD. All rights reserved. Privacy Policy.</p>
            </div>

            <div className="footer-nav-wrapper">
                <ul className="footer-nav">
                    <li><NavLink to='/work'>Work</NavLink></li>
                    <li><NavLink to='/services'>Services</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
                
            </div>

        </div>
       
    )
}

export default Footer;