import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectHero from '../../assets/background3.png';
import proj1 from '../../assets/cap1.png';
import proj2 from '../../assets/background1.png';
import proj3 from '../../assets/background2.png';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    id: 'hillcrest-kitchen',
    name: 'HILLCREST KITCHEN',
    location: 'Hillcrest, Hamilton',
    type: 'Renovation',
    year: '2023',
    image: proj1,
  },
  {
    id: 'garden-retreat',
    name: 'GARDEN RETREAT',
    location: 'Cambridge, Waikato',
    type: 'Assembly',
    year: '2022',
    image: proj2,
  },
  {
    id: 'media-executive',
    name: 'MEDIA EXECUTIVE',
    location: 'Tamahere, Hamilton',
    type: 'Tech Setup',
    year: '2024',
    image: proj3,
  }
];

const Projects = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // Hero animation
    gsap.from(".project-hero-img", {
      scale: 1.3,
      duration: 2,
      ease: "power2.out",
    });

    // Project items stagger
    const projects = gsap.utils.toArray(".project-item");
    projects.forEach((proj, i) => {
      gsap.from(proj, {
        scrollTrigger: {
          trigger: proj,
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-dvh w-full overflow-hidden">
        <img 
          src={projectHero} 
          alt="Projects" 
          className="project-hero-img w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">
          <p className="text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Our Portfolio</p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase">
            PORTFOLIO
          </h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-32 px-6 md:px-20 bg-[#181717]">
        <div className="max-w-7xl mx-auto space-y-40">
        {projectsData.map((project, index) => (
          <div 
            key={project.id}
            onClick={() => navigate(`/project/${project.id}`)}
            className={`project-item group cursor-pointer flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 md:gap-20 items-center`}
          >
            <div className="w-full lg:w-2/3 aspect-video overflow-hidden rounded-[3rem] relative">
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-[#181717]/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            <div className="w-full lg:w-1/3 flex flex-col justify-center space-y-6">
              <div className="flex justify-between items-center text-sm tracking-[0.4em] text-[#b1a696] uppercase">
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none transition-all">
                {project.name}
              </h2>
              <p className="text-xl text-[#b1a696]">{project.location}</p>
              <div className="pt-6">
                <button className="text-sm font-bold tracking-[0.3em] uppercase border-b border-[#b1a696] pb-2 group-hover:border-[#f4efe7] transition-colors">
                  VIEW PROJECT
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-40 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-light text-[#b1a696] leading-tight mb-10">
            "We believe that every renovation is an opportunity to restore both the home and the owner's pride."
          </h3>
          <div className="w-20 h-[1px] bg-[#b1a696] mx-auto opacity-30"></div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
