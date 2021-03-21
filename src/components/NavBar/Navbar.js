import React from 'react';
import '../../App.scss';
import './Navbar.scss';

import getWindowDimensions from '../ViewportProvider';
import MobileNavBar from './MobileNavBar';
import DesktopNavBar from './DesktopNavBar';

function Navbar() {

    const { height, width } = getWindowDimensions();
    const breakpoint = "768";
    console.log(width, height, breakpoint);

    return width < breakpoint ? <MobileNavBar /> : <DesktopNavBar />;
}

export default Navbar
