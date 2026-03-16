import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import cap1 from '../../assets/cap1.png';
import cap2 from '../../assets/background2.png';
import cap3 from '../../assets/background3.png';

gsap.registerPlugin(ScrollTrigger);

const blogsData = {
  'kitchen-trends-2024': {
    title: 'KITCHEN TRENDS 2024',
    category: 'Renovation',
    date: 'March 14, 2024',
    image: cap1,
    content: `
      Hamilton homes are seeing a significant shift in kitchen design. We are moving away from traditional gloss whites and embracing warmer, matte textures and integrated smart technology.

      As specialists in cabinetry and benchtop transformations, we've observed that the modern kitchen is no longer just a cooking space—it's a multi-functional social hub. High-end finishes like engineered stone and soft-close matte cabinetry are now the gold standard for Waikato residents looking to add value to their properties.

      Our team focuses on 'Optimized Spatial Flow,' ensuring that every cupboard and appliance placement serves a logical purpose in the culinary routine.
    `
  },
  'flat-pack-hacks': {
    title: 'THE FLAT PACK ADVANTAGE',
    category: 'Maintenance',
    date: 'Feb 20, 2024',
    image: cap2,
    content: `
      The 'DIY Weekend' is evolving. Modern Hamilton families are realizing that their time is often more valuable than the cost of professional assembly. Flat-pack furniture from retailers like IKEA and Mocka offers great style, but the complex instructions can lead to structural instability if not handled correctly.

      At OnCall Hamilton, we bring specialized tools and years of assembly experience to your door. We don't just 'put it together'; we ensure every joint is tightened to spec and every unit is safely anchored to the wall.

      By choosing professional assembly, you eliminate the risk of damage during build and gain the peace of mind that your furniture is built to last.
    `
  },
  'safe-mounting': {
    title: 'TECH SETUP SAFETY',
    category: 'Expert Tips',
    date: 'Jan 05, 2024',
    image: cap3,
    content: `
      As TVs get larger and thinner, the importance of professional wall mounting has never been higher. A standard 75-inch screen represents a significant investment and a potential safety hazard if not mounted securely.

      We approach every mounting project with structural integrity in mind. We identify the correct stud placement and use trade-grade mounting hardware that exceeds the weight requirements of the screen.

      Wire concealment is our signature move. We believe that a premium tech setup should be 'Invisible,' with all cabling either routed through the wall or tidily concealed in custom housing.
    `
  }
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef();
  const blog = blogsData[id];

  if (!blog) {
    return (
      <div className="bg-[#181717] min-h-screen flex items-center justify-center text-[#f4efe7]">
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 uppercase tracking-[0.3em]">Story Not Found</h1>
            <button onClick={() => navigate('/blogs')} className="text-[#b1a696] hover:text-[#f4efe7]">RETURN TO BLOGS</button>
        </div>
      </div>
    );
  }

  useGSAP(() => {
    gsap.from(".reveal-content", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "power3.out",
    });

    gsap.from(".blog-image-reveal", {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out"
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] pb-32">

      {/* Hero Header */}
      <section className="relative h-[60vh] w-full overflow-hidden mb-20">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="hero-img w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20 bg-gradient-to-t from-[#181717] to-transparent">
          <span className="reveal-content text-[#b1a696] text-[0.7rem] font-bold uppercase tracking-widest mb-4">{blog.category} — {blog.date}</span>
          <h1 className="reveal-content text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase max-w-5xl">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-10">
        <div className="reveal-content prose prose-invert prose-2xl">
            {blog.content.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-xl md:text-2xl text-[#b1a696] leading-relaxed mb-8">
                    {paragraph.trim()}
                </p>
            ))}
        </div>

        {/* Quote Block */}
        <div className="reveal-content my-20 py-10 border-y border-[#2a2725]">
            <h3 className="text-3xl md:text-4xl font-light text-[#f4efe7] text-center max-w-2xl mx-auto leading-tight uppercase">
                "Honest work is the only foundation for true property transformation."
            </h3>
        </div>

        <div className="reveal-content flex justify-between items-center mt-20">
            <div className="flex gap-4">
                <span className="text-[#b1a696] uppercase tracking-widest text-xs">Share:</span>
                <span className="text-[#f4efe7] uppercase tracking-widest text-xs cursor-pointer hover:text-[#b1a696]">TWITTER</span>
                <span className="text-[#f4efe7] uppercase tracking-widest text-xs cursor-pointer hover:text-[#b1a696]">MEDIUM</span>
            </div>
            <div className="text-[#b1a696] uppercase tracking-widest text-xs">
                WRITTEN BY ONCALL HAMILTON EDITORIAL
            </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
