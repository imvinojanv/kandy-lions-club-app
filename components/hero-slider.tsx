"use client"

import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CauseCard from './cause-card';
import { ArrowBigRight, ArrowRight } from 'lucide-react';

const HeroSlider = () => {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1.75,
            spacing: 15,
        },
    });

    return (
        <div className="text-white absolute right-0 w-1/2">
            <div className="flex-1">
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1">
                        <CauseCard isForHero={true}/>
                    </div>
                    <div className="keen-slider__slide number-slide2">  
                        <CauseCard isForHero={true}/>
                    </div>
                    <div className="keen-slider__slide number-slide3">  
                        <CauseCard isForHero={true}/>
                    </div>
                </div>
                <div className='absolute h-full w-72 bg-gradient-to-r from-transparent to-[#1A2D57] top-1/2 transform -translate-y-1/2 right-0 flex items-center justify-end'>
                    <button
                        className="mr-6"
                        onClick={() => instanceRef.current?.next()}
                    >
                        <ArrowRight className='w-7 h-7'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider