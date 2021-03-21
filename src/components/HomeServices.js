import React from 'react';
import { Button } from './Button';
import './HomeServices.scss';

function HomeServices() {

    return (
        <section className="home-services">

            <h2 className="fade-in sm-h2">The&nbsp;whole nine&nbsp;yards.</h2>
            <div className="services-content fade-in">
                <p>Measuring up with a range of solutions working collectively to create cohesive brand experiences.</p>
                <ul className="styled"> 
                    <li>Branding, identity, and design systems</li>
                    <li>Graphic design, advertising, and photography</li>
                    <li>Web design, UI, UX, and product development</li>
                    <li>Digital marketing, SEO, and local search optimization</li>
                </ul>
            </div>
            <div className="btnBox">
                <Button className="service-btn" buttonStyle="btn--primary" buttonSize="btn--large" >Explore Services</Button>
            </div>

            <div className="rulerImg" />
            
        </section>
    )
}

export default HomeServices;