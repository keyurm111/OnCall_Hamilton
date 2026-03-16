import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import servicesHero from '../../assets/services-hero.png';
import s1 from '../../assets/service-kitchen-sq.png';
import s2 from '../../assets/service-flatpack-sq.png';
import s3 from '../../assets/service-tv-sq.png';
import s4 from '../../assets/cap1.png';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    shortDesc: 'Kitchen Renovation',
    icon: '01',
    image: s1
  },
  {
    id: 'flat-pack-assembly',
    title: 'Flat Pack Assembly',
    shortDesc: 'Kit Set Assembly',
    icon: '02',
    image: s2
  },
  {
    id: 'tv-wall-mount',
    title: 'Tv Wall Mount',
    shortDesc: 'Tv Wall mount Tv Wall mount Tv wall Mount',
    icon: '03',
    image: s3
  }
];

const Services = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // Hero animation
    gsap.from(".service-hero-img", {
      scale: 1.3,
      duration: 2,
      ease: "power2.out",
    });

    // List animation
    const items = gsap.utils.toArray(".service-item");
    items.forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-dvh w-full overflow-hidden">
        <img 
          src={servicesHero} 
          alt="Services" 
          className="service-hero-img w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">
          <p className="text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Our Expertise</p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase">
            EXPERTISE
          </h1>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 px-6 md:px-20 bg-[#181717]">
        <div className="max-w-7xl mx-auto divide-y divide-[#b1a696]/20">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              onClick={() => navigate(`/service/${service.id}`)}
              className="service-item group py-20 flex flex-col md:flex-row gap-10 cursor-pointer items-center"
            >
              <div className="text-sm tracking-[0.5em] text-[#b1a696] font-bold md:pt-4">
                {service.icon}
              </div>
              <div className="flex-1 space-y-4">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-lg md:text-xl text-[#b1a696] max-w-xl">
                  {service.shortDesc}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f4efe7] border-b border-[#b1a696] pb-1 group-hover:text-[#b1a696] transition-colors">
                    Read More
                  </span>
                </div>
              </div>
              <div className="w-full md:w-64 aspect-square rounded-[3rem] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0">
                <img src={service.image} className="w-full h-full object-cover" alt={service.title} />
              </div>
              <div className="text-3xl text-[#b1a696] group-hover:translate-x-4 transition-transform">
                →
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Services;
