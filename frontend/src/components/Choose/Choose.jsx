import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Choose = () => {
    const isMobD = useMediaQuery({
        query: "(max-width:768px)",
    });

    useGSAP(() => {
        const stats = gsap.utils.toArray(".stat-card-anim");
        const numbers = gsap.utils.toArray(".stat-number");

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-section",
                start: "top 80%",
                end: "bottom 90%",
                scrub: 1,
            },
        });

        tl.from(".choose-subtitle", {
            yPercent: 100,
            opacity: 0,
            ease: "power1.inOut"
        });

        // Sliding up text animation just like the old text
        tl.from(
            stats,
            {
                yPercent: 120,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: "power3.out"
            },
            "<"
        );

        // Independent Counter Animation
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
                        trigger: ".choose-section",
                        start: "20% bottom",
                    }
                }
            );
        });
    });

    return (
        <section id="choose-section" className="choose-section w-full h-dvh px-6 md:px-20 pt-20 pb-20 flex flex-col justify-between overflow-hidden">
            <div className="w-full max-w-7xl mx-auto">
                <p className='text-[.7rem] text-[#eae5dd] choose-subtitle uppercase tracking-widest'>Our Core Service Values<span>®</span></p>
            </div>
            
            <div className="choose-sec w-full flex md:flex-row flex-col justify-between items-center gap-12 lg:gap-16 pt-16 border-t border-[#3a3530] flex-1 mt-10">
                {/* 500+ Projects Done */}
                <div className="w-full md:w-1/3 overflow-hidden">
                    <div className="stat-card-anim flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-[#2a2725] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-7xl md:text-8xl font-bold italic group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="stat-number" data-target="500">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-sm md:text-base uppercase tracking-[0.2em] font-bold mt-2">Projects Done</p>
                    </div>
                </div>

                {/* 800+ Happy Clients */}
                <div className="w-full md:w-1/3 overflow-hidden">
                    <div className="stat-card-anim flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-[#2a2725] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-7xl md:text-8xl font-bold italic group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="stat-number" data-target="800">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-sm md:text-base uppercase tracking-[0.2em] font-bold mt-2">Happy Clients</p>
                    </div>
                </div>

                {/* 30+ Services */}
                <div className="w-full md:w-1/3 overflow-hidden">
                    <div className="stat-card-anim flex flex-col items-center justify-center text-center gap-4 group">
                        <div className="w-20 h-20 rounded-full bg-[#2a2725] flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-500">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#b1a696" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                        </div>
                        <h2 className="text-[#f4efe7] text-7xl md:text-8xl font-bold italic group-hover:text-[#b1a696] transition-colors duration-500">
                            <span className="stat-number" data-target="30">0</span><span className="text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">+</span>
                        </h2>
                        <p className="text-[#a79c8d] text-sm md:text-base uppercase tracking-[0.2em] font-bold mt-2">Services</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Choose;