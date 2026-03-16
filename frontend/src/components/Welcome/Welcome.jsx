import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { welcomeLinesLG, welcomeLinesSM } from "../../constants/welcome";
import w1 from "../../assets/welcome-1-new.png"
import w2 from "../../assets/welcome-2-new.png"

const Welcome = () => {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const welcomeLines = isMobile ? welcomeLinesSM : welcomeLinesLG;

    useGSAP(() => {
        const lines = gsap.utils.toArray(".clip-text-welcome");
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".welcome-section",
                start: "top 75%",
                end: "bottom 75%",
                scrub: true,
                // markers: true
            },
        });

        lines.forEach((line) => {
            tl.to(line, {
                clipPath: "inset(0% 0% 0% 0%)",
                ease: "none",
                stagger: 0.2,
                duration: 1,
            });
        });
        
        // --- Added from Choose.jsx ---
        const stats = gsap.utils.toArray(".stat-card-anim");
        const numbers = gsap.utils.toArray(".stat-number");

        const tlChoose = gsap.timeline({
            scrollTrigger: {
                trigger: ".choose-sec",
                start: "top 80%",
                end: "bottom 90%",
                scrub: 1,
            },
        });
        tlChoose.from(
            stats,
            {
                yPercent: 120,
                opacity: 0,
                stagger: 0.2,
                duration: 1.5,
                ease: "power3.out"
            }
        );

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
                        trigger: ".choose-sec",
                        start: "20% bottom",
                    }
                }
            );
        });
        // ------------------------------

    });

    return (
        <div id="welcome-section" className='welcome-section w-full h-auto text-[#2A2725]'>
            <div className='max-w-7xl mx-auto flex flex-col gap-2 tracking-[-4] leading-2 px-6 md:px-20'>
                <div className="w-full md:w-full md:text-[64px] text-[34px] welcome-line md:pt-20">
                    <div className="w-full welcome-text flex flex-col justify-center items-start">
                        {welcomeLines.map((text, index) => (
                            <span key={index} className="relative block text-darkBrown md:tracking-[-0.010em] tracking-[0.015em]">
                                {text}
                                <span className="clip-text-welcome md:tracking-[-0.010em] tracking-[0.015em]">{text}</span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center md:p-4 md:mt-20 mt-10 px-6 md:px-20">
                <div className="flex md:flex-row flex-col justify-center items-center gap-4">
                    <img src={w1} alt="welcome image" className="md:rounded-full rounded-full md:w-56 md:h-32 w-40 h-24 object-cover" />
                    <img src={w2} alt="welcome image" className="md:rounded-full rounded-full md:w-56 md:h-32 w-40 h-24 object-cover" />
                </div>
                <div className="md:w-1/2 w-full md:mt-0 mt-10">
                    <p className="md:text-[2rem] text-[1.4rem]  text-[#2A2725]  md:leading-[1.1] md:pr-24 font-normal leading-[26px] tracking-[-0.2px]">
                        <span>A partner who handles the details so you can focus on life.</span><br />
                        <span>Experience quality transformations without the stress.</span>
                    </p>
                </div>
            </div>
            
            {/* --- Added from Choose.jsx --- */}
            <div className="choose-section w-full h-auto px-6 md:px-20 pt-0 pb-20 flex flex-col justify-between overflow-hidden mt-10">
                <div className="choose-sec w-full max-w-7xl mx-auto flex md:flex-row flex-col justify-between items-center gap-12 lg:gap-16 pt-0 flex-1 mt-0">
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
            </div>
            {/* ------------------------------ */}
        </div>
    );
};

export default Welcome;