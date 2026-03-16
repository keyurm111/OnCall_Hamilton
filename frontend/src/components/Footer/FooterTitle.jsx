import { useGSAP } from '@gsap/react';
import gsap, { SplitText, ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

import "./footertitle.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const FooterTitle = () => {
    const ftConRef = useRef(null);

    useGSAP(() => {
        if (!ftConRef.current) return;

        // Ensure we refresh triggers when this component mounts
        const refreshTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        const h1 = ftConRef.current.querySelector(".footer-title h1");
        if (!h1) return;

        const originalHTML = h1.innerHTML;

        const split = new SplitText(h1, {
            type: "chars",
            charsClass: "ftChar",
            exclude: "sub"
        });

        split.chars.forEach(char => {
            char.innerHTML = `<span>${char.innerHTML}</span>`;
        });

        const innerChars = split.chars.map(c => c.querySelector("span"));

        const sub = ftConRef.current.querySelector(".footer-title sub");
        if (sub) {
            sub.innerHTML = `<span>${sub.innerHTML}</span>`;
            const subSpan = sub.querySelector("span");
            innerChars.push(subSpan);
        }

        // Initial state - use fromTo for better state tracking
        gsap.fromTo(innerChars, 
            { x: "-121%" },
            {
                x: "0%",
                stagger: 0.02,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ftConRef.current,
                    start: "top 95%", // Slightly more conservative start
                    end: "top 80%",
                    scrub: true,
                }
            }
        );

        return () => {
            clearTimeout(refreshTimer);
            split.revert();
            if (h1) h1.innerHTML = originalHTML;
        };

    }, { scope: ftConRef });

    return (
        <section ref={ftConRef} className='relative z-1 w-screen h-[40vh] border-1 border-t-[#c4c1b9] px-6 md:px-20'>
            <div className='w-full max-w-7xl mx-auto flex justify-between items-center mt-8'>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    Website made by—<a href="#" className='text-[#f2ede5]'>Moyra.co</a>
                </p>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    This website is using <a href="#" className='text-[#f2ede5]'>cookies</a>
                </p>
                <p className='text-[#b1a696] text-[0.7rem]'>
                    All rights reserved © <a href="#" className='text-[#f2ede5]'>2025</a>
                </p>
            </div>

            <div className='footer-title w-full text-center overflow-hidden'>
                <h1 className='text-[10vw] font-bold whitespace-nowrap'>
                    OnCall Hamilton<sub className="text-[4vw]">®</sub>
                </h1>
            </div>
        </section>
    );
};

export default FooterTitle;