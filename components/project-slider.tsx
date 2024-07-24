"use client"

import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import CauseCard from './cause-card';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import ProjectCard from './project-card';

const ProjectSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1.30,
            spacing: 15,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
    });

    useEffect(() => {
        if (instanceRef.current) {
            instanceRef.current.on("slideChanged", slider => {
                setCurrentSlide(slider.track.details.rel);
            });
        }
    }, [instanceRef]);

    const slides = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
    ];

    return (
        <div className="w-full flex justify-end">
            <div className="flex-1 relative text-white right-0 w-full">
                <div ref={sliderRef} className="keen-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`keen-slider__slide rounded-2xl number-slide${index + 1} ${currentSlide === index ? 'bg-yellow' : 'bg-gray-200'}`}
                        >
                            <ProjectCard />
                        </div>
                    ))}
                </div>
                <button
                    className="-ml-20 absolute h-14 w-14 rounded-lg bg-[#1A2D57] top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-center"
                    onClick={() => instanceRef.current?.prev()}
                >
                    <ArrowLeft className='w-9 h-9' />
                </button>
                <button
                    className="mr-44 absolute h-14 w-14 rounded-lg bg-[#1A2D57] top-1/2 transform -translate-y-1/2 right-0 flex items-center justify-center"
                    onClick={() => instanceRef.current?.next()}
                >
                    <ArrowRight className='w-9 h-9' />
                </button>
            </div>
        </div>
    )
}

export default ProjectSlider