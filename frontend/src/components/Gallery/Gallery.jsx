import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './gallery.css';
import { BsFillPlusCircleFill } from "react-icons/bs";

import s1 from '../../assets/gallery-kitchen.png';
import s2 from '../../assets/gallery-flatpack.png';
import s3 from '../../assets/gallery-tv.png';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const servicesPreview = [
    {
        id: 'kitchen-renovation',
        title: 'KITCHEN RENOVATION',
        desc: 'Professional cabinet makeovers and benchtop replacements for your culinary space.',
        image: s1,
        progress: '33%'
    },
    {
        id: 'flat-pack-assembly',
        title: 'FLAT PACK ASSEMBLY',
        desc: 'Expert assembly for all furniture brands, ensuring stability and safety for your home.',
        image: s2,
        progress: '67%'
    },
    {
        id: 'tv-wall-mount',
        title: 'TV WALL MOUNT',
        desc: 'Professional mounting for all screen sizes with seamless cable concealment for a modern look.',
        image: s3,
        progress: '100%'
    }
];

const Gallery = () => {
    const pageRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery-page4",
                start: "top top",
                end: "+=150%",
                scrub: 1,
                pin: true,
            }
        });

        tl4.to(".gallery-page4", {
            backgroundColor: "#181717",
        }, 'start');

        gsap.set(".gallery-topText h4, .gallery-topText h3, .gallery-bottomText h3", {
            opacity: 1,
            x: 0
        });

        tl4.to(".gallery-box h3", {
            opacity: 0,
        }, 'a')
        .to(".gallery-page4 .gallery-background", {
            width: "calc(100vw - 1rem)",
            height: "calc(100vh - 1rem)",
            borderRadius: "3.5rem",
            y: 0,
        }, 'a')
            .to(".gallery-page4 .gallery-background img", {
                transform: "scale(1)",
            }, 'a')
            .from(".gallery-background .gallery-topText h4, .gallery-background .gallery-topText h3, .gallery-background .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")

            .to("#gallery-second", {
                transform: "translate(-50%, -50%)",
            }, 'b')
            .to("#gallery-second img", {
                transform: "scale(1)",
            }, 'b')
            .to(".gallery-page4 .gallery-background", {
                scale: 0.9,
                opacity: 0,
                y: -50
            }, 'b')
            .from("#gallery-second .gallery-topText h4, #gallery-second .gallery-topText h3, #gallery-second .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0")
            .to("#gallery-third", {
                transform: "translate(-50%, -50%)",
            }, 'c')
            .to("#gallery-third img", {
                transform: "scale(1)",
            }, 'c')
            .to("#gallery-second", {
                scale: 0.9,
                opacity: 0,
            }, 'c')
            .from("#gallery-third .gallery-topText h4, #gallery-third .gallery-topText h3, #gallery-third .gallery-bottomText h3", {
                opacity: 0,
                x: 50,
            })
            .to({}, { duration: 0.4 }, "+=0");

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const generateExpertise = (quantity = 6) => {
        const expertise = [];
        for (let i = 1; i <= quantity; i++) {
            expertise.push(
                <h3 key={i} style={{ "--index": i }} className='tracking-tighter'>
                    Expertise®
                </h3>
            );
        }
        return expertise;
    };

    return (
        <section className="gallery-page4" ref={pageRef}>
            <div className="gallery-slider">
                <div
                    className="gallery-box"
                    style={{ "--time": "40s", "--quantity": 6 }}
                >
                    {generateExpertise(6)}
                </div>
            </div>

            {/* First Service Slide */}
            <div 
                className="gallery-background cursor-pointer group"
                onClick={() => navigate(`/service/${servicesPreview[0].id}`)}
            >
                <img src={servicesPreview[0].image} alt={servicesPreview[0].title} />
                <div className="gallery-topText">
                    <h4 className="uppercase italic">{servicesPreview[0].title}</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#b1a696] group-hover:scale-110 transition-transform' />
                        <h3 className="italic uppercase tracking-wide">
                            {servicesPreview[0].desc}
                        </h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#4f4b48]">
                        <div className="progress-line absolute z-10 bg-[#f4efe7] w-[33%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            {/* Second Service Slide */}
            <div 
                id="gallery-second" 
                className="gallery-background2 cursor-pointer group"
                onClick={() => navigate(`/service/${servicesPreview[1].id}`)}
            >
                <img src={servicesPreview[1].image} alt={servicesPreview[1].title} />
                <div className="gallery-topText">
                    <h4 className="uppercase italic">{servicesPreview[1].title}</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#b1a696] group-hover:scale-110 transition-transform' />
                        <h3 className="italic uppercase tracking-wide">
                            {servicesPreview[1].desc}
                        </h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#4f4b48]">
                        <div className="progress-line absolute z-10 bg-[#f4efe7] w-[67%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            {/* Third Service Slide */}
            <div 
                id="gallery-third" 
                className="gallery-background2 cursor-pointer group"
                onClick={() => navigate(`/service/${servicesPreview[2].id}`)}
            >
                <img src={servicesPreview[2].image} alt={servicesPreview[2].title} />
                <div className="gallery-topText">
                    <h4 className="uppercase italic">{servicesPreview[2].title}</h4>
                    <h3>(Scroll)</h3>
                </div>
                <div className="gallery-bottomText">
                    <div className='w-full flex justify-center items-center gap-0'>
                        <BsFillPlusCircleFill className='w-8 h-8 text-[#b1a696] group-hover:scale-110 transition-transform' />
                        <h3 className="italic uppercase tracking-wide">
                            {servicesPreview[2].desc}
                        </h3>
                    </div>
                    <div className="relative z-9 w-50 h-[0.1rem] bg-[#4f4b48]">
                        <div className="progress-line absolute z-10 bg-[#f4efe7] w-[100%] h-[0.1rem] top-1/2 -translate-y-1/2 left-0"></div>
                    </div>
                </div>
            </div>

            {/* Absolute View All Button */}
            <div className="absolute bottom-8 right-8 md:right-16 z-[100]">
                <button 
                    onClick={() => navigate('/services')}
                    className="text-[#f4efe7] border-b border-[#f4efe7] pb-1 uppercase font-bold tracking-[0.2em] text-sm hover:text-[#b1a696] hover:border-[#b1a696] transition-colors whitespace-nowrap"
                >
                    View All Services ↗
                </button>
            </div>
        </section>
    );
};

export default Gallery;