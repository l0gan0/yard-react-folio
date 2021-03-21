import React, {useEffect} from 'react';
import '../../App.scss';
import { motion } from 'framer-motion';
import lax from '../../../node_modules/lax.js';
import  './About.scss';
import { Button } from '../Button';

function About () {

    useEffect(() => {

        lax.init();

        // drivers
        lax.addDriver("scrollY", function () {
            return window.scrollY;
        });

        lax.addElements(

            ".fade-in", 
            {
                scrollY: {
                opacity: [
                    ["elInY", "elCenterY"],[0, 1],
                ]
                }
            },

            []
        );
        lax.addElements(

            ".navBkg",
            {
                scrollY: {
                scale: [
                    [150, 0],
                    [1, .7],
                ]
                }
                
            },
            []
        );

        lax.addElements(
        ".push-up",
        {
            scrollY: {
            translateY: [
                ["elInY","elOutY"],
                [0, -120],
            ]
            }
        },
        []
        );



    }, []);

    return (
        <>
            <div className="about-page">
                <header className="header about-header">
                    <motion.h1
                        initial={{y: 60, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: .2, delay: .3}}
                    >About</motion.h1>
                </header>
                <div className="about-pencil" />
                <main className="content">
                    <h3>Yard works from pencil to pixel. That means our ideas <s>are conceived in a primodial goo and delivered on raw unadultarated&hellip;</s></h3>
                    <p>&hellip;That means we can get the bad ideas out of the way. It allows us to relax, have fun and encourage creativity without missing the brief. </p>
                    <p>Working closely with stakeholders and fellow creatives, we distill ideas to identify, establish, and simplify the core purpose. </p>
                    <p>Once we have a solid foundation we trade the pencil for pixels. Assembling brand elements atop the foundation, each pixel serves a purpose, all working together to deliver results.</p>
                </main>
                <section className="culture">
                    <div className="culture-hero">
                        <h2 className="fade-in">Culture</h2>
                        <div className="zag-border" />
                    </div>
                    <div className="passion values">
                        <h3>Passion</h3>
                        <p>It all starts with passion. It’s the engine that powers this machine, and it loves to stretch it’s legs. It’s endless pusuit of the next big thing, and the unbridaled creativity that inspires creation. </p>
                    </div>
                    <div className="integrity values">
                        <h3>Integrity</h3>
                        <p>Operating with integrity is essential to building good relationships. Using the golden rule as a moral compass ensures the integrity of the work and the soul. </p>
                    </div>
                    <div className="detail values">
                        <h3>Detail</h3>
                        <p>Sweat the little things. The difference between good enough and truly great is often a few pixels. There’s no shortcut - just focus, hard work, and determination. </p>
                    </div>
                    <div className="balance values">
                        <h3>Balance</h3>
                        <p>Life isn’t all about creating art. It’s beneficial to step back and enjoy what life has created around you.</p>
                    </div>

                </section>

                <section className="story">

                    <div className="story-hero">
                        <h2 class="fade-in">Story</h2>
                        <div className="auckland" />
                        <div className="zoom push-up" />
                    </div>

                    <p className="short-story">Based in Auckland, New Zealand with a strong presence in the United States, Yard works directly with clients and design/marketing firms around the world.</p>

                    <div className="logan-yard">
                        <div className="name">Logan Yard</div>
                    </div>

                </section>

                <div className="discuss-cta">
                    <h5>Let’s discuss what we can build together.</h5>
                    <p>We work with entrepreneurs, start-ups, small businesses, non-profits, large corporations, and just about everyone in between.</p>
                    <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" buttonPage="work">Let's Chat</Button>           
                </div>
                
                <div className="scribbleTop aboutScribbleTop" />

            </div>
        </>
    );
}

export default About;