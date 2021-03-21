import React, { useEffect } from 'react';
import '../../App.scss';
import './Services.scss';
import { motion } from 'framer-motion';
import { Button } from '../Button';
import lax from '../../../node_modules/lax.js';

function Services () {

    useEffect(() => {

        lax.init();

        // drivers
        lax.addDriver("scrollY", function () {
            return window.scrollY;
        });

        // elements

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

            ".brand-design-accent",
            {
                scrollY: {
                translateY: [
                    ["elInY", "elOutY"],
                    [-100, 100],
                ]
                }
            },

        []
        );

        lax.addElements(

        ".fade-in", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-200"],[0, 1],
            ]
            }
        },

        []
        );

       
        lax.addElements(

        ".f1", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-300", "elCenterY-301"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".u2", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-270", "elCenterY-271"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".n3", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-240", "elCenterY-241"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".c4", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-210", "elCenterY-211"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".t5", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-180", "elCenterY-181"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".i6", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-150", "elCenterY-151"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".o7", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-120", "elCenterY-121"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".n8", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-90", "elCenterY-91"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".par9", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-60", "elCenterY-61"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".par10", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY-30", "elCenterY-31"],[0, 0, 1],
            ]
            }
        },

        []
        );

        lax.addElements(
        ".cur11", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY", "elCenterY-1"],[0, 0, 1],
            ]
            }
        },

        []
        );
        lax.addElements(
            ".cur12", 
            {
                scrollY: {
                opacity: [
                    ["elInY", "elCenterY+30", "elCenterY+29"],[0, 0, 1],
                ]
                }
            },
    
            []
            );

            lax.addElements(

            ".rulerImg",
            {
                scrollY: {
                scaleY: [
                    ["elInY", "elCenterY"],
                    [.1, 1],
                ],
                translateY: [
                    ["elInY", "elCenterY"],
                    [128, 0],
                ]
                }
            },
    
            []
            );
            

    }, 
    []);


    return (
        <>
        <div className="services-page">
            
            <header className="header services-header">
                <motion.h1
                    initial={{y: 60, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .2, delay: .3}}
                >Services</motion.h1>
            </header>

            <motion.div className="services-hero"
                initial={{y: 60, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .2, delay: .5}}
            ></motion.div>

            <main className="content">
                
                <motion.div className="services-intro"
                initial={{y: 60, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .2, delay: .7}}
                >
                    <h3>A suite of services working together to communicate your brand's core messaging across all touchpoints.</h3>
                </motion.div>
                
                <section className="branding-design">
                    <h2 className="fade-in">Branding & Design</h2>
                    <div className="desc">
                        <p>What do you want people to say about your brand? Influence their thoughts and feelings with memorable messaging and great design.</p>
                    </div>
                    <ul className="services-list styled">
                        <li>Brand identity and positioning</li>
                        <li>Name development</li>
                        <li>Research and brand strategy</li>
                        <li>Visual identity</li>
                        <li>Stationery and collateral</li>
                        <li>Product packaging</li>
                        <li>Integrated ad campaigns</li>
                        <li>Rebranding</li>
                        <li>Product & lifestyle photography</li>
                    </ul>

                </section>
                <div className="brand-design-accent"></div>

                <section className="web-design-development">
                    <h2 className="fade-in">Website Design & Development</h2>
                    <div className="desc">
                        <p>For visitors, your website should be an enjoyable experience. For you, the technology should enable your organization to function beautifully.</p>
                    </div>
                    <ul className="services-list styled">
                        <li><abbr title="User Experience Design">UX</abbr> / <abbr title="User Interface Design">UI</abbr> Design</li>
                        <li>Prototyping</li>
                        <li>Website Design</li>
                        <li>Visual identity</li>
                        <li>Mobile & App Design</li>
                        <li>Website Development</li>
                        <li>eCommerce</li>
                    </ul>

                    <div className="web-design-accent">
                        <span className="f1">f</span>
                        <span className="u2">u</span>
                        <span className="n3">n</span>
                        <span className="c4">c</span>
                        <span className="t5">t</span>
                        <span className="i6">i</span>
                        <span className="o7">o</span>
                        <span className="n8">n</span>
                        <span className="par9">(</span>
                        <span className="par10">)</span>
                        <span className="cur11">&#123;</span>
                        <span className="cur12 blink-me">|</span>
                    </div>

                </section>

                <section className="digital-marketing">
                    <h2 className="fade-in">Digital Marketing</h2>
                    <div className="desc">
                        <p>Who is your audience, and how do you reach them? What do you have to tell them? Start the conversation with research, data, and calculated messaging.</p>
                    </div>
                    <ul className="services-list styled">
                        <li>Market research</li>
                        <li>Business & marketing plans</li>
                        <li><abbr title="Search Engine Optimization">SEO</abbr> & <abbr title="Search Engine Marketing">SEM</abbr></li>
                        <li>Local search optimization</li>
                        <li>Copywriting & content creation</li>
                        <li>Consulting</li>
                    </ul>
                </section>

            </main>

            <div className="rulerImg"></div>

            <div className="discuss-cta">
                <h5>Let’s discuss what we can build together.</h5>
                <p>We work with entrepreneurs, start-ups, small businesses, non-profits, large corporations, and just about everyone in between.</p>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" buttonPage="work">Let's Chat</Button>           
            </div>
            
            <div className="scribbleTop"></div>

        </div>
        </>
    );
}

export default Services;