import React from 'react';
import '../../App.scss';
import { motion } from 'framer-motion';
import Form from '../Form';
import  './Contact.scss';
import Airplane from '../Airplane';
import AirplaneDesktop from '../AirplaneDesktop';
import getWindowDimensions from '../ViewportProvider';

function Contact () {

    const { width } = getWindowDimensions();
    const breakpoint = "768";

    return (
        <>  
                
            { width < breakpoint ? <Airplane /> : <AirplaneDesktop /> }
            <div className="contact-page">
            <header className="header contact-header">
                <motion.h1
                    initial={{y: 60, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .2, delay: .3}}
                >Contact</motion.h1>
            </header>

            <div className="contact-info">

                <hgroup>
                    <h2>Yard</h2>
                    <h3>Brand & Web Design Co.</h3>
                </hgroup>

                <div className="address">
                    <p>7C/100 Anzac Ave<br /> Auckland CBD, 1010 <br /> New Zealand</p>
                </div>

                <div className="phone">
                    <p>Phone <br />
                    <span className="caption">NZ</span> +64 022 691 2820 <br />
                    <span className="caption">US</span> +1 800 123 4567</p>
                </div>

                <div className="email">
                    <p>Email <br />
                    <a href="mailto:hi@yardbrand.co">hi@yardbrand.co</a></p>
                </div>

            </div>
            
            <div className="scribbleTop" />
            <div className="contact-spacer" />
            <main className="contact-form">
                <Form />
            </main>
            

            </div>

        </>
    );
}

export default Contact;