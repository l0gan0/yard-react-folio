import React, {useEffect} from "react";
import './GridScroll.scss';
import '../HeroSection.scss';
import { motion }  from 'framer-motion';
import { Button } from '../Button';
import lax from '../../../node_modules/lax.js';
import getWindowDimensions from '../ViewportProvider';

const GridScroll = () => {  
   
    function HomeIntro(props) {
        const text = props.text;
        return text.split('\n').map(str => <span>{str}</span>);
    }

    const { height, width } = getWindowDimensions();
    console.log(width, height);

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

            ".rowOne, .rowThree, .rowFive",
            {
                scrollY: {
                translateX: [
                    ["elInY-15", "elCenterX", "elOutY+15"],
                    [0, "screenWidth/2", "screenWidth"],
                ],
               
                }
            },
            []
        );
        
        lax.addElements(

            ".rowTwo, .rowFour",
            {
                scrollY: {
                translateX: [
                    ["elInY-15", "elCenterX", "elOutY+15"],
                    ["screenWidth", "screenWidth/2", 0],
                ]
                }
            },
            
        []
        );

        lax.addElements(

            ".hero-btn-arrow",
            {
                scrollY: {
                translateY: [
                    ["elInY", "elCenterY-200", "elOutY"],
                    [10, 0, 40],
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

        ".fade-in-out", 
        {
            scrollY: {
            opacity: [
                ["elInY", "elCenterY+200", "elOutY-100"],[1, 1, 0],
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

        // pixel elements
        lax.addElements(

        ".pixel-up",
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
        lax.addElements(

        ".pixel-up-fast",
        {
            scrollY: {
            translateY: [
                ["elInY","elOutY"],
                [0, -190],
            ]
            }
        },
        []
        );

        lax.addElements(

        ".pixel-down-fast",
        {
            scrollY: {
            translateY: [
                ["elInY","elOutY"],
                [0, 200],
            ]
            }
        },
        []
        );

                // pixel elements
                lax.addElements(

        ".pixel-down",
        {
            scrollY: {
            translateY: [
                ["elInY","elOutY"],
                [0, 90],
            ]
            }
        },
        []
        );


        

    }, []);
    
    return (
 
            <main id="heroScroll">
                
                <motion.h1
                    initial={{y: 60, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: .2, delay: .3}}
                ><HomeIntro text={"Brand & \n web design."} /></motion.h1>

                <div className="tiles--crop fade-in-out">
                <section className="tiles tiles--rotated">
                    
                    <div className="tiles__wrap">
            
                        <div className="tiles__line rowOne">
                            <div className="tiles__line-img"></div>
                            <div className="tiles__line-img"></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/3.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/4.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/23.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/6.jpg)"}}></div>
                        </div>
                        
                        <div className="tiles__line rowTwo">
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/19.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/8.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/24.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/10.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/11.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/12.jpg)"}}></div>
                        </div>
                        
                        <div className="tiles__line rowThree">
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/13.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/14.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/15.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/16.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/17.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/18.jpg)"}}></div>
                        </div>
                        
                        <div className="tiles__line rowFour">
                            <div className="tiles__line-img"></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/20.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/21.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/2.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/25.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/8.jpg)"}}></div>
                        </div>
                        
                        <div className="tiles__line rowFive">
                            <div className="tiles__line-img"></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/7.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/1.jpg)"}}></div>
                            <div className="tiles__line-img" style={{backgroundImage:"url(../../images/grid-images/2.jpg)"}}></div>
                            <div className="tiles__line-img"></div>
                            <div className="tiles__line-img"></div>
                        </div>
                        
                    </div>
                    
                </section>
                </div>

                <div className="intro-content">
                    <p>Yard is an independent design studio offering a range of <a href="#routeservicespage">integrated services</a> for your physical and digital presence.</p>
                    <div className="hero-btns">
                        <div className="hero-btn-arrow" />    
                        <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large" buttonPage="work">View Work</Button>           
                    </div>
                </div>
                
            </main>
            

    );
}

export default GridScroll;