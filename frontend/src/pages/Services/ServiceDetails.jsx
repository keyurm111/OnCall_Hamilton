import React, { useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaDownload, FaCheckCircle } from 'react-icons/fa';

import kitchenHero from '../../assets/gallery-kitchen-renovation.png';
import flatpackHero from '../../assets/gallery-flat-pack-assembly.png';
import tvHero from '../../assets/gallery-tv-wall-mount.png';
import kitchenSq from '../../assets/service-kitchen-sq.png';
import flatpackSq from '../../assets/service-flatpack-sq.png';
import tvSq from '../../assets/service-tv-sq.png';

gsap.registerPlugin(ScrollTrigger);

const servicesData = {
  'kitchen-renovation': {
    title: 'Kitchen Renovation',
    description: "At OnCall Hamilton, we turn outdated kitchens into stylish, functional spaces that feel like the heart of your home. Whether you're dreaming of a modern makeover or a classic refresh, our team delivers quality craftsmanship and efficient timelines.",
    process: [
        { label: "Consultation", desc: "Free site visits and design consultations for project-based work." },
        { label: "Planning", desc: "Transparent quoting and material selection tailored to your budget." },
        { label: "Installation", desc: "Expert execution by our multi-trade team with precision assembly." },
        { label: "Walkthrough", desc: "Final inspection to ensure every detail meets our quality standards." }
    ],
    highlightsTitle: "Why Choose Us?",
    highlights: [
      "Custom solutions for any space",
      "Reliable, experienced tradespeople",
      "Clean, professional work environment",
      "Transparent and honest timelines"
    ],
    guarantee: "Warranty & Support: We stand by the quality of our craftsmanship. OnCall Hamilton provides a comprehensive workmanship guarantee on all renovation projects, ensuring that your new kitchen remains a source of pride and functionality for years to come. Our ongoing support team is always just a call away if any issues arise post-installation.",
    cta: "Ready to upgrade your kitchen? We’re just a call away.",
    heroImage: kitchenHero,
    image: kitchenSq
  },
  'flat-pack-assembly': {
    title: 'Flat Pack Assembly',
    description: "We’re your local pros for flatpack furniture assembly. Whether it’s IKEA, Kmart, or anything in between, we’ll build it so you don’t have to. Fast, friendly, and stress-free service.",
    process: [
        { label: "Unboxing", desc: "Careful unpacking and verification of all components and hardware." },
        { label: "Assembly", desc: "Professional construction following manufacturer specifications." },
        { label: "Leveling", desc: "Ensuring stability and laser-level precision for all units." },
        { label: "Anchoring", desc: "Safety wall-anchoring to prevent tips and ensure durability." }
    ],
    highlightsTitle: "Assembly Features:",
    highlights: [
        "IKEA & Kmart assembly experts",
        "Fast and friendly onsite service",
        "Disposal of all packaging materials",
        "Trade-grade tools and hardware"
    ],
    guarantee: "Safety & Reliability: Every piece of furniture we assemble is built to last. We ensure all joints are tightened to trade specifications and modular units are safely anchored to the wall structure. Our assembly service includes a satisfaction guarantee, providing you with peace of mind that your home environment is both stylish and structurally sound.",
    cta: "Stop struggling with instructions. Let us build it for you.",
    heroImage: flatpackHero,
    image: flatpackSq
  },
  'tv-wall-mount': {
    title: 'Tv Wall Mount',
    description: "Installing a TV wall mount is a great way to save space and enhance your viewing experience. We supply and install professional-grade brackets for all types of televisions and walls.",
    process: [
        { label: "Assessment", desc: "Checking wall strength, studs, and electrical wiring locations." },
        { label: "Positioning", desc: "Determining optimal viewing angles and ergonomic heights." },
        { label: "Mounting", desc: "Precision drilling and secure bracket attachment to structure." },
        { label: "Concealment", desc: "Clean in-wall routing or custom housing for all cabling." }
    ],
    highlightsTitle: "Service Features:",
    highlights: [
        "Mounting for screens up to 100\"+",
        "Affordable pricing starting at $79",
        "In-wall wire concealment options",
        "Workspace cleanup and bracket testing"
    ],
    guarantee: "Warranty & Professional Support: It is essential that your investment is protected. We offer a full warranty on our workmanship and the mounting hardware we supply. Our installers provide ongoing support to ensure your viewing experience remains optimal, addressing any concerns or adjustments needed after the installation is complete.",
    cta: "Get the perfect viewing angle. Book your mounting today.",
    heroImage: tvHero,
    image: tvSq
  }
};

const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef();
  const sidebarRef = useRef(null);
  const service = servicesData[id];

  const allServices = [
    { name: 'Kitchen Renovation', path: '/service/kitchen-renovation' },
    { name: 'Flat Pack Assembly', path: '/service/flat-pack-assembly' },
    { name: 'Tv Wall Mount', path: '/service/tv-wall-mount' },
  ];

  useGSAP(() => {
    gsap.from(".reveal-item", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

    // Sticky Pinning for Sidebar
    ScrollTrigger.create({
      trigger: sidebarRef.current,
      start: "top 120px",
      endTrigger: ".details-content-wrapper",
      end: "bottom bottom", 
      pin: true,
      pinSpacing: false,
    });
  }, { scope: containerRef });

  if (!service) {
    return (
      <div className="bg-[#181717] min-h-screen flex items-center justify-center text-[#f4efe7]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-[0.3em]">Service Not Found</h1>
          <button onClick={() => navigate('/services')} className="text-[#b1a696] hover:text-[#f4efe7]">RETURN TO SERVICES</button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full overflow-hidden">
            <img 
                src={service.heroImage} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-50 hero-img"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 bg-gradient-to-t from-[#181717] to-transparent">
                <p className="reveal-item text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Our Expertise</p>
                <h1 className="reveal-item text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase">
                    {service.title}
                </h1>
            </div>
        </section>

        <div className="details-content-wrapper px-6 md:px-20 py-24 bg-[#181717]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
            
            <aside ref={sidebarRef} className="lg:w-1/3 h-fit space-y-6 z-10 w-full mb-12 lg:mb-0">
                <div className="bg-[#2a2725] p-6 rounded-[2.5rem] border border-[#3a3530] reveal-item">
                    <h3 className="text-lg font-bold uppercase mb-4 border-b border-[#3a3530] pb-4 tracking-widest">All Services</h3>
                    <ul className="space-y-2">
                        {allServices.map((item, i) => (
                            <li key={i}>
                                <Link 
                                    to={item.path}
                                    className={`block py-3 px-4 rounded-2xl transition-all duration-300 font-bold uppercase text-[0.7rem] tracking-widest ${id === item.path.split('/').pop() ? 'bg-[#b1a696] text-[#181717]' : 'bg-[#1f1d1b] text-[#a79c8d] hover:bg-[#3a3530] hover:text-[#f4efe7]'}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-[#2a2725] p-6 rounded-[2.5rem] border border-[#3a3530] space-y-4 reveal-item">
                    <h3 className="text-lg font-bold uppercase tracking-widest border-b border-[#3a3530] pb-4 mb-4">Download</h3>
                    <button className="w-full flex items-center justify-between bg-[#1f1d1b] p-4 rounded-2xl group hover:bg-[#b1a696] hover:text-[#181717] transition-all duration-300">
                        <span className="font-bold uppercase text-[0.6rem] tracking-[0.2em]">Download Brochure</span>
                        <FaDownload className="text-[#b1a696] group-hover:text-[#181717] transition-colors" />
                    </button>
                    <button className="w-full flex items-center justify-between bg-[#1f1d1b] p-4 rounded-2xl group hover:bg-[#b1a696] hover:text-[#181717] transition-all duration-300">
                        <span className="font-bold uppercase text-[0.6rem] tracking-[0.2em]">Download Application</span>
                        <FaDownload className="text-[#b1a696] group-hover:text-[#181717] transition-colors" />
                    </button>
                </div>
            </aside>

            <div className="lg:w-2/3 space-y-16">
                {/* Intro */}
                <div className="space-y-6">
                    <h2 className="reveal-item text-4xl md:text-5xl font-bold uppercase tracking-tight">The Expertise.</h2>
                    <p className="reveal-item text-[#a79c8d] text-lg md:text-xl leading-relaxed">{service.description}</p>
                </div>

                {/* Main Process Section */}
                <div className="space-y-10 reveal-item">
                    <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-[#3a3530] pb-6">Our Work Process</h3>
                    <div className="space-y-8">
                        {service.process.map((step, i) => (
                            <div key={i} className="flex gap-8 group">
                                <span className="text-4xl font-bold text-[#3a3530] group-hover:text-[#b1a696] transition-colors duration-500">{`0${i+1}.`}</span>
                                <div className="space-y-2">
                                    <h4 className="text-xl font-bold uppercase tracking-wide">{step.label}</h4>
                                    <p className="text-[#a79c8d] text-base leading-relaxed">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Main Image */}
                <div className="w-full h-[40vh] md:h-[500px] rounded-[3rem] overflow-hidden reveal-item">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" />
                </div>

                {/* Highlights Card */}
                <div className="bg-[#2a2725] p-10 md:p-16 rounded-[3.5rem] border border-[#3a3530] reveal-item">
                    <h3 className="text-2xl font-bold uppercase mb-10 tracking-widest">{service.highlightsTitle}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {service.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                                <FaCheckCircle className="text-[#b1a696] mt-1 shrink-0" />
                                <p className="text-[#f4efe7] font-medium leading-tight">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Professional Guarantee Section */}
                <div className="reveal-item space-y-6">
                    <h3 className="text-2xl font-bold uppercase tracking-widest border-b border-[#3a3530] pb-6">Professional Guarantee</h3>
                    <p className="text-[#a79c8d] text-base md:text-lg leading-relaxed italic border-l-2 border-[#b1a696] pl-6">
                        {service.guarantee}
                    </p>
                </div>

                {/* CTA */}
                <div className="text-center md:text-left py-12 reveal-item">
                    <h4 className="text-2xl md:text-3xl font-bold uppercase mb-8 border-t border-[#3a3530] pt-12">{service.cta}</h4>
                    <button 
                        onClick={() => navigate('/contact')}
                        className="bg-[#f4efe7] text-[#181717] px-12 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-[0.8rem] hover:scale-105 hover:bg-[#b1a696] hover:text-[#f4efe7] transition-all duration-300"
                    >
                        Contact Us Now →
                    </button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ServiceDetails;
