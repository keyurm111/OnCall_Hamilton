import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import blogHero from '../../assets/background4.png';
import cap1 from '../../assets/cap1.png';
import cap2 from '../../assets/background2.png';
import cap3 from '../../assets/background3.png';

gsap.registerPlugin(ScrollTrigger);

const blogsData = [
  {
    id: 'kitchen-trends-2024',
    title: 'KITCHEN TRENDS 2024',
    category: 'Renovation',
    date: 'March 14, 2024',
    image: cap1,
    excerpt: 'Exploring the shift towards matte finishes and integrated smart appliances in Waikato homes.'
  },
  {
    id: 'flat-pack-hacks',
    title: 'THE FLAT PACK ADVANTAGE',
    category: 'Maintenance',
    date: 'Feb 20, 2024',
    image: cap2,
    excerpt: 'Why professional assembly is replacing the DIY weekend for Hamilton modern residents.'
  },
  {
    id: 'safe-mounting',
    title: 'TECH SETUP SAFETY',
    category: 'Expert Tips',
    date: 'Jan 05, 2024',
    image: cap3,
    excerpt: 'A deep dive into wall anchoring and weight load distribution for large entertainment arrays.'
  }
];

const Blogs = () => {
  const containerRef = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    // Hero animation
    gsap.from(".blog-hero-img", {
      scale: 1.3,
      duration: 2,
      ease: "power2.out",
    });

    // Staggered card entry
    const cards = gsap.utils.toArray(".blog-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        delay: i * 0.1,
        ease: "power3.out",
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#181717] min-h-screen text-[#f4efe7] overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-dvh w-full overflow-hidden">
        <img 
          src={blogHero} 
          alt="Blogs" 
          className="blog-hero-img w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col justify-end p-10 md:p-20">
          <p className="text-[#b1a696] text-[0.7rem] font-bold tracking-widest uppercase mb-4">Latest Insights</p>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter leading-none mb-4 uppercase">
            INSIGHTS
          </h1>
        </div>
      </section>

      {/* Blog Feed */}
      <section className="py-20 px-6 md:px-20 bg-[#181717]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog) => (
            <div 
              key={blog.id} 
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="blog-card group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-6">
                <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 bg-[#f4efe7] text-[#181717] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                    {blog.category}
                </div>
              </div>
              <div className="space-y-4">
                <span className="text-[#b1a696] text-sm uppercase tracking-widest">{blog.date}</span>
                <h2 className="text-2xl font-bold leading-tight group-hover:text-[#b1a696] transition-colors uppercase">
                    {blog.title}
                </h2>
                <p className="text-[#b1a696] line-clamp-2">
                    {blog.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-2 text-sm font-bold tracking-widest group-hover:gap-4 transition-all uppercase">
                    Read Article <span className="text-[#b1a696]">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Blogs;
