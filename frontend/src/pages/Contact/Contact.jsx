import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaInstagram, FaTwitter, FaLinkedinIn, FaBehance } from 'react-icons/fa';
import contactHero from '../../assets/background1.png';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero animation
    gsap.from(".contact-hero-img", {
      scale: 1.2,
      duration: 2,
      ease: "power2.out",
    });

    // Staggered text reveal
    gsap.from(".reveal-text", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });

    // Form animation
    gsap.from(".contact-form", {
      scrollTrigger: {
        trigger: ".contact-form",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
    });

    // Socials reveal
    gsap.from(".social-icon", {
      scrollTrigger: {
        trigger: ".social-icon",
        start: "top 90%",
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={contactHero} 
          alt="Contact Us" 
          className="contact-hero-img w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 bg-gradient-to-t from-[#181717] to-transparent">
          <h1 className="reveal-text text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase">
            CONNECT
          </h1>
          <p className="reveal-text text-xl md:text-2xl max-w-2xl text-[#b1a696]">
            Ready to transform your property? Start your project with a free consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-20 px-6 md:px-20 bg-[#181717]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-16">
          <div className="reveal-text">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#b1a696] mb-4">Location</h2>
            <p className="text-3xl md:text-4xl font-bold">19 Johnsview Terrace,<br />Hillcrest, Hamilton 3216 NZ</p>
          </div>

          <div className="reveal-text">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#b1a696] mb-4">Inquiries</h2>
            <p className="text-3xl md:text-4xl font-bold hover:text-[#b1a696] transition-colors">
              <a href="mailto:info@oncallhamilton.nz">info@oncallhamilton.nz</a>
            </p>
            <p className="text-xl md:text-2xl mt-4 font-bold">+64 22 438 0051</p>
            <p className="text-lg md:text-xl text-[#b1a696] mt-1">Mon - Sat: 08:00 AM - 08:00 PM</p>
          </div>

          <div className="reveal-text">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#b1a696] mb-4">Socials</h2>
            <div className="flex gap-6">
              {[FaInstagram, FaTwitter, FaLinkedinIn, FaBehance].map((Icon, i) => (
                <a key={i} href="#" className="social-icon text-2xl hover:text-[#b1a696] transition-colors">
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-[#2a2725] p-10 md:p-16 rounded-[4rem]">
          <form className="space-y-10">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="YOUR NAME" 
                className="w-full bg-transparent border-b border-[#b1a696] py-4 focus:outline-none focus:border-[#f4efe7] transition-colors text-xl placeholder:text-[#4f4b48]"
              />
            </div>
            <div className="group relative">
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-transparent border-b border-[#b1a696] py-4 focus:outline-none focus:border-[#f4efe7] transition-colors text-xl placeholder:text-[#4f4b48]"
              />
            </div>
            <div className="group relative">
              <select className="w-full bg-transparent border-b border-[#b1a696] py-4 focus:outline-none focus:border-[#f4efe7] transition-colors text-xl text-[#b1a696] appearance-none uppercase">
                <option value="">SELECT SERVICE</option>
                <option value="kitchen">KITCHEN RENOVATION</option>
                <option value="flatpack">FLAT PACK ASSEMBLY</option>
                <option value="electrical">ELECTRICAL & TRADES</option>
                <option value="other">OTHER MAINTENANCE</option>
              </select>
            </div>
            <div className="group relative">
              <textarea 
                rows="4" 
                placeholder="TELL US ABOUT YOUR PROJECT" 
                className="w-full bg-transparent border-b border-[#b1a696] py-4 focus:outline-none focus:border-[#f4efe7] transition-colors text-xl placeholder:text-[#4f4b48] resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-[#f4efe7] text-[#181717] py-6 rounded-full font-bold text-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
              SEND INQUIRY
            </button>
          </form>
        </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
