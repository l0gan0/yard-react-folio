import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.scss';
import './Navbar.scss';
import { motion, AnimatePresence } from 'framer-motion';

function MobileNavbar() {

    const navItemVariants = {
        hidden: {
            opacity: 0,
            x: '100%',
            y: 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                type: 'spring',
                mass: .5,
                damping: 6,
                delayChildren: .3,
                staggerChildren: .05
            }
        
        }
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            
            <AnimatePresence>

            <div className={click ? 'logo-container sticky' : 'logo-container' }>
                <NavLink to="/" className={click ? 'logo dark' : 'logo' } onClick={closeMobileMenu}>
                    YARD
                </NavLink>
            </div>

            <div className={click ? 'navBkg open' : 'navBkg closed' }></div>

            <div className={click ? 'menu-icon open' : 'menu-icon closed' } onClick={handleClick}>
                <div className="bar one" />
                <div className="bar two" />
                <div className="bar three" />
            </div>

            <nav className={click ? 'navbar active' : 'navbar'}>

                <motion.ul className={click ? 'nav-menu active' : 'nav-menu'}
                key="parentOne"
                initial={false}
                animate={click ? "visible" : "hidden"} 
                variants={navItemVariants}
                >

                <motion.li className="nav-item" key="m-work" variants={navItemVariants}  >
                    <NavLink to="/work" activeClassName="active" className="nav-links" onClick={closeMobileMenu}>
                        Work
                    </NavLink>
                </motion.li>
                <motion.li className="nav-item" key="m-services" variants={navItemVariants}  >
                    <NavLink to="/services" activeClassName="active" className="nav-links" onClick={closeMobileMenu}>
                        Services
                    </NavLink>
                </motion.li>
                <motion.li className="nav-item" key="m-about" variants={navItemVariants}   >
                    <NavLink to="/about" activeClassName="active" className="nav-links" onClick={closeMobileMenu}>
                        About
                    </NavLink>
                </motion.li>

                <motion.li className="nav-item" key="m-contact" variants={navItemVariants}   >
                    <NavLink to="/contact" activeClassName="active" className="nav-links" onClick={closeMobileMenu}>
                        Contact
                    </NavLink>
                </motion.li>

                <motion.li key="childFive" variants={navItemVariants} >

                    <ul className="quickContact">
                        <li key="mc-email">hi@yardbrand.co</li>
                        <li key="mc-phone-nz">NZ +64 022 691 2820</li>
                        <li key="mc-phone-usa">US 1 800 123 4567</li>
                    </ul>

                </motion.li>

                </motion.ul>

 

                
            </nav>
            </AnimatePresence>
  
        </>
    )
}

export default MobileNavbar

