/** @jsx jsx */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { css, jsx } from '@emotion/core';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';
import Dots from './Dots';



const Slider = (props) => {

    //Get width
    const targetRef = useRef();
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);

    const getWidth = () => dimensions.width

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const { translate, transition, activeIndex } = state;

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.slides.length - 1) * getWidth(),
                activeIndex: props.slides.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }


    //Autoplay

    const autoPlayRef = useRef();
    
    useEffect(() => {
        autoPlayRef.current = nextSlide
        
    })


    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

      

        const interval = setInterval(play, props.autoPlay * 1000)
        
        return () => {
            clearInterval(interval)
            
        }
    }, [])

   


    return (
        <div className="slider" ref={targetRef}>
            <SliderContent
                translate={translate}
                transition={transition}
            // width={getWidth}
            >
                {
                    props.slides.map((slide, i) => (
                        <Slide key={slide + i} content={slide} />
                    ))
                }
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots slides={props.slides} activeIndex={activeIndex} />
        </div>
    )
}

export default Slider
