import React from "react";
import '../../App.scss';
import HomeServices from '../HomeServices';
import HomeAbout from '../HomeAbout';

import GridScroll from '../Hero/GridScroll';


function Home () {

    return (
        <>
            <GridScroll />
            <HomeServices />
            <HomeAbout />
        </>
    );
}

export default Home;