import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.scss';
import './Logo.scss';
import { motion } from 'framer-motion';

function Logo() {

    return (
        <>
            <motion.div className="logo-container" animate={{ y: 50 }}>
                    <NavLink to="/" className="logo">
                        YARD
                    </NavLink>
            </motion.div>
        </>
    )
}

export default Logo
