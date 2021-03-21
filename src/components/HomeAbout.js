import React from 'react';
import { Link } from 'react-router-dom';
import './HomeAbout.scss';
import { Button } from './Button';

function HomeAbout() {
    return (
        <main className="about-section">

            <div className="scribbleTop"></div>
            <div className="home-about">
                <h2 className="fade-in">Pencil to pixel.</h2>
                <p className="fade-in">It’s more than a slogan — it’s a philosophy. It’s the process that delivers creative and effective work from concept to completion. It’s how we tell <Link to="/about">our story</Link>, and how we can start a new one with you.</p>
            </div>

            <div className="pencil-box"></div>

            <div className="pixel-box">
                <div className="pixel bkg-pixel"></div>
                <div className="pixel bkg-pixel-two"></div>
                <div className="pixel pixel-up p1"></div>
                <div className="pixel pixel-down p2"></div>
                <div className="pixel pixel-down p3"></div>
                <div className="pixel pixel-up p4"></div>
                <div className="pixel pixel-up p5"></div>
                <div className="pixel pixel-down p6"></div>
                <div className="pixel pixel-down p7"></div>
                <div className="pixel pixel-down p8"></div>
                <div className="pixel pixel-up p9"></div>
                <div className="pixel pixel-down p10"></div>
            </div>

            <div className="connect-area">
                <h2>Let&rsquo;s connect.</h2>
                <p><span className="caption">NZ</span> +64 022 691 2820 <br /> <span className="caption">US</span> 1 800 123 4567 </p>
                <Button className="service-btn" buttonStyle="btn--primary" buttonSize="btn--large" >Send us a Message</Button>
            </div>

            <div className="scribbleBot"></div>

        </main>
    )
}


export default HomeAbout;