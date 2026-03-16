import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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

const HomeBlog = () => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useGSAP(() => {
        // Section Header Animation
        gsap.from(".blog-header-content", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        // Staggered card entry
        const cards = gsap.utils.toArray(".home-blog-card");
        cards.forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                delay: i * 0.15,
                ease: "power3.out",
            });
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-32 px-6 md:px-20 bg-[#181717] text-[#f4efe7]">
            <div className="max-w-7xl mx-auto">
                <div className="blog-header-content flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="text-[0.7rem] font-bold text-[#b1a696] mb-4 uppercase tracking-widest italic">
                            Latest Insights
                        </p>
                        <h2 className="text-5xl md:text-7xl font-bold italic uppercase leading-none">
                            Top & Latest<br />Blogs
                        </h2>
                    </div>
                    
                    <button 
                        onClick={() => navigate('/blogs')}
                        className="text-sm font-bold tracking-[0.3em] uppercase border-b border-[#b1a696] pb-2 hover:border-[#f4efe7] transition-colors whitespace-nowrap"
                    >
                        VIEW ALL ARTICLES ↗
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogsData.map((blog) => (
                        <div 
                            key={blog.id} 
                            onClick={() => navigate(`/blog/${blog.id}`)}
                            className="home-blog-card group cursor-pointer"
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
                                <h3 className="text-2xl font-bold leading-tight group-hover:text-[#b1a696] transition-colors uppercase italic">
                                    {blog.title}
                                </h3>
                                <p className="text-[#b1a696] line-clamp-2 italic">
                                    {blog.excerpt}
                                </p>
                                <div className="pt-4 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#f4efe7] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Read More</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeBlog;
