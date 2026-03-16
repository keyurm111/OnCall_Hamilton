import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutImg from '../../assets/about-hero.png';
import setupImg from '../../assets/about-partnership.png';
import cap2Img from '../../assets/about-quality.png';
import bg2Img from '../../assets/background2.png';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        // Hero image parallax
        gsap.from(".about-hero-img", {
            scale: 1.3,
            duration: 2,
            ease: "power2.out",
        });

        // Reveal animations for text sections
        const reveals = gsap.utils.toArray(".reveal-text");
        reveals.forEach((text) => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: text,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });
        });

        // Staggered list items
        const listItems = gsap.utils.toArray(".stagger-item");
        gsap.from(listItems, {
            scrollTrigger: {
                trigger: ".stagger-container",
                start: "top 80%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
        });

        const serviceItems = gsap.utils.toArray(".service-item-anim");
        gsap.from(serviceItems, {
            scrollTrigger: {
                trigger: ".service-list-container",
                start: "top 85%",
            },
            x: -50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
        });

        // Stat counter animation identical to Choose.jsx
        const stats = gsap.utils.toArray(".about-stat-card");
        const numbers = gsap.utils.toArray(".about-stat-number");

        gsap.from(stats, {
            scrollTrigger: {
                trigger: ".about-stats-section",
                start: "top 85%",
            },
            yPercent: 100,
            opacity: 0,
            stagger: 0.2,
            duration: 1.5,
            ease: "power3.out"
        });

        numbers.forEach((number) => {
            const target = parseInt(number.getAttribute("data-target"));
            gsap.fromTo(number, 
                { innerHTML: 0 }, 
                {
                    innerHTML: target,
                    duration: 2.5,
                    ease: "power3.out",
                    snap: { innerHTML: 1 },
                    scrollTrigger: {
                        trigger: ".about-stats-section",
                        start: "20% bottom",
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-dvh w-full overflow-hidden">
                <img 
                    src={aboutImg} 
                    alt="About OnCall Hamilton" 
                    className="about-hero-img w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">
                    <p className="text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Discover Who We Are</p>
                    <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase">
                        ABOUT US
                    </h1>
                </div>
            </section>

            {/* Intro Narrative */}
            <section className="py-32 px-6 md:px-20 bg-[#181717]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                        <p className="text-[0.7rem] font-bold text-[#b1a696] mb-2 uppercase tracking-widest">
                            Commitment
                        </p>
                        <h2 className="reveal-text text-5xl md:text-7xl font-bold uppercase leading-tight mb-4">
                            Quality<br />Service
                        </h2>
                        <p className="reveal-text text-[#a79c8d] text-sm md:text-base leading-relaxed border-t border-[#3a3530] pt-6">
                            There are many home improvement services available, but many are diluted or unreliable. At OnCall Hamilton, we provide trusted, professional expertise for all your renovation needs, from kitchen makeovers to flooring and more.
                        </p>
                        <p className="reveal-text text-[#a79c8d] text-sm md:text-base leading-relaxed">
                            Our team delivers high-quality, honest craftsmanship you can depend on for lasting satisfaction.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <div className="w-full h-[40vh] md:h-[500px] rounded-[3rem] overflow-hidden reveal-text">
                           <img src={cap2Img} alt="Quality Service" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Types (Quick vs Project) */}
            <section className="py-32 px-6 md:px-20 bg-[#181717]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20">
                    <div className="reveal-text flex-1 border-t border-[#3a3530] pt-8 group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl md:text-4xl font-bold uppercase group-hover:text-[#b1a696] transition-colors duration-300">
                                Quick Services
                            </h3>
                            <span className="text-[#524e4b] group-hover:text-[#b1a696] transition-colors duration-300">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                            </span>
                        </div>
                        <p className="text-[#a79c8d] text-sm md:text-base leading-relaxed">
                            We understand that sometimes you need a fast, efficient solution. Our quick services are designed to help you with small tasks and immediate needs.
                        </p>
                    </div>
                    
                    <div className="reveal-text flex-1 border-t border-[#3a3530] pt-8 group">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-3xl md:text-4xl font-bold uppercase group-hover:text-[#b1a696] transition-colors duration-300">
                                Project-Based<br />Services
                            </h3>
                            <span className="text-[#524e4b] group-hover:text-[#b1a696] transition-colors duration-300">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            </span>
                        </div>
                        <p className="text-[#a79c8d] text-sm md:text-base leading-relaxed">
                            For larger-scale renovations and home improvement projects, we offer comprehensive, project-based services to transform your living space.
                        </p>
                    </div>
                </div>
            </section>

            {/* Value Proposition List */}
            <section className="py-20 px-6 md:px-20 bg-[#181717] border-t border-[#3a3530]">
                <div className="max-w-7xl mx-auto stagger-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
                    <div className="stagger-item group">
                        <div className="w-10 h-10 rounded-full bg-[#2a2725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                        </div>
                        <p className="text-[#f4efe7] text-xl font-bold uppercase mb-2">Great Value</p>
                        <p className="text-[#a79c8d] text-sm md:text-base">Affordable, high-quality services that deliver great value.</p>
                    </div>
                    <div className="stagger-item group">
                        <div className="w-10 h-10 rounded-full bg-[#2a2725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                        </div>
                        <p className="text-[#f4efe7] text-xl font-bold uppercase mb-2">Free Consultations</p>
                        <p className="text-[#a79c8d] text-sm md:text-base">Free consultations, designs, and site visits for project-based services.</p>
                    </div>
                    <div className="stagger-item group">
                        <div className="w-10 h-10 rounded-full bg-[#2a2725] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                        <p className="text-[#f4efe7] text-xl font-bold uppercase mb-2">Flexible Scheduling</p>
                        <p className="text-[#a79c8d] text-sm md:text-base">Flexible scheduling, including after-hours appointments, to fit your routine.</p>
                    </div>
                </div>
                    </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section w-full py-20 px-6 md:px-20 flex flex-col justify-between overflow-hidden">
                <div className="w-full max-w-7xl mx-auto border-t border-[#3a3530] pt-16 flex flex-col md:flex-row justify-between items-center gap-12 lg:gap-16">
                    <div className="about-stat-card flex flex-col items-center justify-center text-center gap-1 group w-full md:w-1/3">
                        <div className="w-14 h-14 rounded-full bg-[#2a2725] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-5xl md:text-6xl font-bold group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="about-stat-number" data-target="500">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-xs md:text-sm uppercase tracking-[0.2em] font-bold mt-1">Projects Done</p>
                    </div>

                    <div className="about-stat-card flex flex-col items-center justify-center text-center gap-1 group w-full md:w-1/3">
                        <div className="w-14 h-14 rounded-full bg-[#2a2725] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-5xl md:text-6xl font-bold group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="about-stat-number" data-target="800">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-xs md:text-sm uppercase tracking-[0.2em] font-bold mt-1">Happy Clients</p>
                    </div>

                    <div className="about-stat-card flex flex-col items-center justify-center text-center gap-1 group w-full md:w-1/3">
                        <div className="w-14 h-14 rounded-full bg-[#2a2725] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform duration-500">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-5xl md:text-6xl font-bold group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="about-stat-number" data-target="30">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-xs md:text-sm uppercase tracking-[0.2em] font-bold mt-1">Services</p>
                    </div>
                </div>
            </section>

            {/* Extended Commitment */}
            <section className="py-32 px-6 md:px-20 bg-[#181717]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/2">
                        <div className="w-full h-[60vh] md:h-[700px] rounded-[3rem] overflow-hidden reveal-text">
                           <img src={setupImg} alt="Trusted Local Partner" className="w-full h-full object-cover transition-all duration-700 hover:scale-105" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex flex-col justify-center gap-6">
                        <p className="text-[0.7rem] font-bold text-[#b1a696] mb-2 uppercase tracking-widest">
                            Who We Are
                        </p>
                        <h2 className="reveal-text text-5xl md:text-7xl font-bold uppercase leading-tight mb-6">
                            Trusted<br />Local<br />Partner
                        </h2>
                        <p className="reveal-text text-[#a79c8d] text-sm md:text-base leading-relaxed border-t border-[#3a3530] pt-6">
                            At OnCall Hamilton, we take pride in being your trusted local partner for all your home and business needs. Based in the heart of Hamilton, we are dedicated to providing top-notch services that enhance the comfort, convenience, and aesthetics of your spaces.
                        </p>
                        <p className="reveal-text text-[#a79c8d] text-sm md:text-base leading-relaxed">
                            We are dedicated to making your life easier by providing a range of services designed to simplify your household and lifestyle needs. From flat pack assembly to appliance installation and removal, handyman services, and cleaning, we are your one-stop solution for all things related to home maintenance and organization.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-32 px-6 md:px-20 bg-[#181717] border-t border-[#3a3530]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <h2 className="reveal-text text-5xl md:text-7xl font-bold uppercase leading-tight">
                            Our<br />Mission
                        </h2>
                    </div>
                    <div className="lg:w-2/3 flex flex-col justify-center gap-8">
                        <p className="reveal-text text-[#a79c8d] text-lg md:text-xl leading-relaxed">
                            Our mission is to provide top-notch service with a focus on convenience and customer satisfaction. We understand that modern life can be hectic, and taking care of various chores and tasks around the house can be time-consuming and overwhelming. That's why we've created a comprehensive suite of services that cater to a wide range of needs, allowing you to spend your time on things that matter most to you.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 reveal-text border-t border-[#3a3530] pt-8">
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-[#2a2725] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="text-[#f4efe7] font-medium">Flat Pack Assembly Service</p>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-[#2a2725] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="text-[#f4efe7] font-medium">Appliance Installation And Removal Service</p>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-[#2a2725] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="text-[#f4efe7] font-medium">Handyman Service</p>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <div className="w-8 h-8 rounded-full bg-[#2a2725] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                <p className="text-[#f4efe7] font-medium">Cleaning Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
};

export default About;
