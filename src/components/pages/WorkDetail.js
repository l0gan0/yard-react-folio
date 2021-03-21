import React from 'react';
import '../../App.scss';
import './Work.scss';
import DisplayWork from '../DisplayWork';
import { motion } from 'framer-motion';

function WorkDetail () {
    return (
        <>

        <div className="work-page">
            <header className="header services-header">
                <motion.h1 
                initial={{y: 60, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: .2, delay: .3}}
                >Infusion Brewing Co.</motion.h1>
            </header>

            <div className="scribbleBot" />
            
            <main className="content">
                
                <DisplayWork />

            </main>

            

        </div>
        </>
    );
}

export default WorkDetail;