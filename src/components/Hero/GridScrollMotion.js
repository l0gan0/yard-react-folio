import React, { useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import './GridScrollMotion.scss';


const GridScrollMotion = () => {  

    const [show, doShow] = useState({
        rowOne: true,
        rowTwo: true,
        rowThree: true,
        rowFour: true,
        rowFive: true
    });
    const [initPos, setInitPos] = useState({
        rowOne: false,
        rowTwo: false,
        rowThree: false,
        rowFour: true,
        rowFive: false
    });
    const [percentShown, setPercentShow] = useState({
        rowOne: 50,
        rowTwo: 0,
        rowThree: -200,
        rowFour: 0,
        rowFive: 0
    });
    const   refOne = useRef(null),
            refTwo = useRef(null),
            refThree = useRef(null),
            refFour = useRef(null),
            refFive = useRef(null);

    useLayoutEffect(() => {
        const topPos = (element) => element.getBoundingClientRect().top;
        const getHeight = (element) => element.offsetHeight;
        const   div1Pos = topPos(refOne.current),
                div2Pos = topPos(refTwo.current),
                div3Pos = topPos(refThree.current),
                div4Pos = topPos(refFour.current),
                div5Pos = topPos(refFive.current);

        const div3Height = getHeight(refThree.current);

        const onScroll = () => {
        const scrollPos = window.scrollY + window.innerHeight;

        // Element scrolled to
        if (div1Pos < scrollPos) {
            doShow((state) => ({ ...state, rowOne: true }));
        }
        // Element scrolled away (up)
        // if (div1Pos > scrollPos) {
        //   doShow(state => ({ ...state, itemOne: false }));
        // }

        if (div2Pos < scrollPos) {
            doShow((state) => ({ ...state, rowTwo: true }));
        }

        if (div3Pos < scrollPos) {
            // Element scrolled to
            doShow((state) => ({ ...state, rowThree: true }));

            let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height;
            if (itemThreePercent > 100) itemThreePercent = 100;
            if (itemThreePercent < 0) itemThreePercent = 0;

            setPercentShow((prevState) => ({
            ...prevState,
            rowThree: itemThreePercent
            }));
        } 
        
        if (div4Pos < scrollPos) {
            doShow((state) => ({ ...state, rowFour: true }));
        }

        if (div5Pos < scrollPos) {
            doShow((state) => ({ ...state, rowFive: true }));
        }
        
        else if (div3Pos > scrollPos) {
            // Element scrolled away (up)
            doShow((state) => ({ ...state, rowThree: false }));
        }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <>
        <Wrapper>
            <Div
            animate={show.rowThree}
            animatePercent={percentShown.rowThree}
            ref={refThree}
            >
                Content
            </Div>
            <Div animate={show.itemTwo} ref={refTwo} />
            <Div animate={show.itemOne} ref={refOne} />
            <Div animate={show.itemFour} ref={refFour} />
            <Div animate={show.itemFive} ref={refFive} />
        </Wrapper>
        </>
    );
    };

    const Div = styled.div`
    height: 300px;
    width: 300px;
    background-color: #81D742;
    /* transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")}); */
    position: relative;
    left: 0;
    transform: translateX( ${({ animatePercent }) => animatePercent ? `${animatePercent}%` : `0`} ); 
    
    transition: all .05s;
    margin: 20px;
    opacity: ${({ animatePercent }) => animatePercent ? `${animatePercent / 50}` : `1`};
    `;

    const Wrapper = styled.div`
    margin-top: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    overflow: hidden;
    `;

export default GridScrollMotion;