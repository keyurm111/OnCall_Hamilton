import gsap, { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import colimg1 from "../../assets/sticky-kitchen.png";
import colimg2 from "../../assets/sticky-garden.png";
import colimg3 from "../../assets/sticky-media.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const StickyCols = () => {
    const navigate = useNavigate();
    const [reveal, setReveal] = useState(false);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger, SplitText);

        // 1️⃣ Split text lines once DOM ready
        const textElements = document.querySelectorAll(".col-3 h1, .col-3 p");
        textElements.forEach((element) => {
            const split = new SplitText(element, { type: "lines", linesClass: "line" });
            split.lines.forEach((line) => {
                line.innerHTML = `<span>${line.textContent}</span>`;
            });
        });

        // Refresh ScrollTrigger after a short delay to ensure layout is settled
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);

        // 2️⃣ Initial state
        gsap.set(".col-3 .col-content-wrapper .line span", { yPercent: 0 });
        gsap.set(".col-3 .col-content-wrapper-2 .line span", { yPercent: -125 });

        // 3️⃣ Controlled phase logic using timeline (simpler and stable)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".sticky-cols",
                start: "top top",
                end: "+=150%",
                pin: true,
                scrub: 1,
                // markers: true,
            },
        });
        tl.add(() => setReveal(false));
        // PHASE 1: Reveal col-2, hide col-1
        tl.to(".col-1", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-2", { x: "0%", duration: 0.8 }, "<")
            .to(".col-3", { y: "0%", duration: 0.8 }, "<")
            .to(".col-img-1 img", { scale: 1, duration: 0.8 }, "<")
            .to(".col-img-2", {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                duration: 0.8,
            }, "<")
            .to(".col-img-2 img", { scale: 1.6, duration: 0.8 }, "<")

        tl.add(() => setReveal(false));
        tl.add(() => setReveal(true));
        // PHASE 2: Switch col-2 -> col-3 content
        tl.to(".col-2", { opacity: 0, scale: 0.8, duration: 0.8 })
            .to(".col-3 .col-content-wrapper .line span", {
                yPercent: -125,
                duration: 0.8,
            }, "<")
        tl.to(".col-3", { x: "0%", duration: 0.8 }, "-=0.8")
            .to(".col-4", { y: "0%", duration: 0.8 }, "<")
            .to(".col-3 .col-content-wrapper-2 .line span", {
                yPercent: 0,
                delay: 0.4,
                duration: 0.8,
            }, "<");

        return () => {
            clearTimeout(timer);
            ScrollTrigger.getAll().forEach((st) => st.kill());
            tl.kill();
        };
    });

    return (
        <section className="sticky-cols w-screen h-dvh overflow-hidden bg-[#181717] lg:mb-20 flex items-center justify-center relative">
            <div className="sticky-cols-wrapper relative w-[95vw] h-[75vh] mx-auto">
                {/* PROJECT 1 TEXT */}
                <div className="col col-1 cursor-pointer" onClick={() => navigate('/project/hillcrest-kitchen')}>
                    <div className="col-content">
                        <div className="col-content-wrapper py-10 group">
                            <div>
                                <h1 className="text-2xl text-[#b1a696] font-bold leading-auto italic uppercase group-hover:text-[#f4efe7] transition-colors duration-500">
                                    Hillcrest
                                    <br />
                                    Kitchen
                                    <br />
                                    Renovation
                                    <br />
                                    Hamilton
                                </h1>
                                <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#f4efe7] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    <span>Read More</span>
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                                </div>
                            </div>
                            <div className="col-content-para flex items-center gap-4 justify-between uppercase">
                                <div className="flex items-center gap-0 justify-center">
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">1</h3>
                                    <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
                                </div>
                                <p className={`text-[12px] font-medium italic ${!reveal ? "mr-6" : "mr-0"}`}> 
                                    Custom cabinetry and stone benchtops
                                    <br />
                                    creating a high-end family culinary hub.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* IMAGES FOR PROJECTS 1 & 2 */}
                <div className="col col-2">
                    <div className="col-img col-img-1 cursor-pointer" onClick={() => navigate('/project/hillcrest-kitchen')}>
                        <div className="col-img-wrapper">
                            <img src={colimg1} alt="Hillcrest Kitchen" />
                        </div>
                    </div>
                    <div className="col col-img-2 p-2 cursor-pointer" onClick={() => navigate('/project/garden-retreat')}>
                        <div className="col-img-wrapper">
                            <img src={colimg2} alt="Garden Retreat" />
                        </div>
                    </div>
                </div>

                {/* PROJECT 2 & 3 TEXT */}
                <div className="col col-3">
                    <div className="col-content-wrapper py-10 cursor-pointer group" onClick={() => navigate('/project/garden-retreat')}>
                        <div>
                            <h1 className="text-2xl font-bold leading-auto italic uppercase text-[#b1a696] group-hover:text-[#f4efe7] transition-colors duration-500">
                                Garden
                                <br />
                                Retreat
                                <br />
                                Studio
                                <br />
                                Cambridge
                            </h1>
                            <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#f4efe7] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Read More</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                            </div>
                        </div>
                        <div className={`col-content-para flex items-center gap-4 justify-between uppercase ${reveal ? "ml-0" : "ml-6"}`}>
                            <div className="flex items-center gap-0 justify-center">
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#aaa091]">{(reveal) ? "3" : "2"}</h3>
                                <h3 className="border-1 px-3 py-1 rounded-full text-[#524e4b]">3</h3>
                            </div>
                            <p className="text-[12px] font-medium italic"> 
                                Professional assembly of a Scandi-style
                                <br />
                                garden oasis with structural anchoring.
                            </p>
                        </div>
                    </div>
                    <div className="col-content-wrapper-2 py-10 cursor-pointer group" onClick={() => navigate('/project/media-executive')}>
                        <div>
                            <h1 className="text-2xl font-bold leading-auto italic uppercase text-[#f4efe7] group-hover:text-[#b1a696] transition-colors duration-500">
                                Media
                                <br />
                                Executive
                                <br />
                                Setup
                                <br />
                                Tamahere
                            </h1>
                            <div className="mt-6 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.2em] uppercase text-[#f4efe7] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                <span>Read More</span>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                            </div>
                        </div>
                        <div className="col-content-para flex items-center gap-4 justify-between uppercase">
                            <div className="flex items-center gap-0 justify-center">
                            </div>
                            <p className={`text-[12px] font-medium italic ${!reveal ? "mr-0" : "mr-6"}`}> 
                                Tech-forward home office upgrade with
                                <br />
                                complete wire concealment and mounting.
                            </p>
                        </div>
                    </div>
                </div>

                {/* IMAGE FOR PROJECT 3 */}
                <div className="col col-4 cursor-pointer" onClick={() => navigate('/project/media-executive')}>
                    <div className="col-img col-img-1">
                        <div className="col-img-wrapper">
                            <img src={colimg3} alt="Media Executive" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Absolute View All Button */}
            <div className="absolute bottom-8 right-8 md:right-[5vw] z-[100]">
                <button 
                    onClick={() => navigate('/projects')}
                    className="text-[#f4efe7] border-b border-[#f4efe7] pb-1 uppercase font-bold tracking-[0.2em] text-sm hover:text-[#b1a696] hover:border-[#b1a696] transition-colors whitespace-nowrap"
                >
                    View All Projects ↗
                </button>
            </div>
        </section>
    );
};


export default StickyCols;