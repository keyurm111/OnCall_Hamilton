import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import proj1 from '../../assets/cap1.png';
import proj2 from '../../assets/background1.png';
import proj3 from '../../assets/background2.png';
import bg3 from '../../assets/background3.png';
import bg4 from '../../assets/background4.png';

gsap.registerPlugin(ScrollTrigger);

const projectsData = {
  'hillcrest-kitchen': {
    name: 'HILLCREST KITCHEN',
    location: 'Hillcrest, Hamilton',
    description: 'A complete culinary transformation. We replaced outdated cabinetry with streamlined modern units and installed premium stone benchtops to create a functional, high-end family hub.',
    image: proj1,
    year: '2023',
    type: 'Renovation',
    details: [
      { label: 'Scope', value: 'Cabinetry & Stone' },
      { label: 'Finishing', value: 'Matte Charcoal & Oak' },
      { label: 'client', value: 'Private Resident' }
    ],
    gallery: [bg3, bg4, proj2]
  },
  'garden-retreat': {
    name: 'GARDEN RETREAT',
    location: 'Cambridge, Waikato',
    description: 'Professional assembly of a premium Scandinavian-style garden studio. Our team handled the structural assembly and anchored the units for maximum safety and durability.',
    image: proj2,
    year: '2022',
    type: 'Assembly',
    details: [
      { label: 'Units', value: 'Modular Studio' },
      { label: 'Assembly', value: '18 Man Hours' },
      { label: 'Leveling', value: 'Laser Precision' }
    ],
    gallery: [proj1, bg4, proj3]
  },
  'media-executive': {
    name: 'MEDIA EXECUTIVE',
    location: 'Tamahere, Hamilton',
    description: 'A tech-forward home office upgrade. We designed and installed a floating TV array with complete wire concealment and custom-built supporting cabinetry for a minimalist finish.',
    image: proj3,
    year: '2024',
    type: 'Tech Setup',
    details: [
      { label: 'Mounting', value: 'Dual 65" Array' },
      { label: 'Audio', value: 'Sonos Integration' },
      { label: 'Wiring', value: 'Zero-Visible Cables' }
    ],
    gallery: [proj1, bg3, bg4]
  }
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="bg-[#181717] min-h-screen flex items-center justify-center text-[#f4efe7]">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 uppercase tracking-[0.3em]">Project Not Found</h1>
          <button onClick={() => navigate('/projects')} className="text-[#b1a696] hover:text-[#f4efe7]">RETURN TO PORTFOLIO</button>
        </div>
      </div>
    );
  }

  useGSAP(() => {
    // Parallax hero
    gsap.to(".project-hero-img", {
      scrollTrigger: {
        trigger: ".project-hero-img",
        start: "top top",
        scrub: true
      },
      y: 200
    });

    // Stagger content reveal
    gsap.from(".reveal-item", {
      scrollTrigger: {
        trigger: ".reveal-item",
        start: "top 90%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">


      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover opacity-50 hero-img"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 bg-gradient-to-t from-[#181717] to-transparent">
          <span className="reveal-item text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">{project.type} — {project.year}</span>
          <h1 className="reveal-item text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase">
            {project.name}
          </h1>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-32 px-6 md:px-20 bg-[#181717]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-10">
          <h2 className="reveal-item text-4xl md:text-5xl font-bold uppercase tracking-tight">The Concept.</h2>
          <p className="reveal-item text-xl md:text-2xl text-[#b1a696] leading-relaxed">
            {project.description}
          </p>
        </div>
        
        <div className="bg-[#2a2725] p-10 md:p-16 rounded-[3rem] space-y-10">
          {project.details.map((detail, i) => (
            <div key={i} className="reveal-item border-b border-[#b1a696]/20 pb-6 flex justify-between items-end">
              <span className="text-sm uppercase tracking-[0.3em] text-[#b1a696]">{detail.label}</span>
              <span className="text-xl md:text-2xl font-bold">{detail.value}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 px-6 md:px-20 bg-[#181717]">
        <div className="max-w-7xl mx-auto space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-[70vh] rounded-[3rem] overflow-hidden">
             <img src={project.gallery[0]}  className="w-full h-full object-cover"/>
          </div>
          <div className="h-[70vh] rounded-[3rem] overflow-hidden">
             <img src={project.gallery[1]}  className="w-full h-full object-cover"/>
          </div>
        </div>
        <div className="h-[100vh] rounded-[3rem] overflow-hidden">
             <img src={project.gallery[2]}  className="w-full h-full object-cover"/>
        </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetails;
