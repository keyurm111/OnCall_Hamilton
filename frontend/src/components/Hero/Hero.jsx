import gsap from "gsap/all";
import smoke from "../../assets/smoke_final.mp4";
import homeHero from "../../assets/home-hero.png"
import mobileHeroBg from "../../assets/hero-mobile.png"
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    const isMobHero = useMediaQuery({
        query: "(max-width:768px)",
    });

    useGSAP(() => {
        if (!isMobHero) {
            gsap.to(".hero-section .hero-img", {
                yPercent: "-5",
                stagger: 0.02,
                scale: 1.2,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1.5,
                }
            });
        };
    }, [isMobHero]);

    return (
        <section id="hero-section" className="hero-section w-dvw md:h-dvh h-[100vh] md:p-2 p-2.5 mb-20">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
                <div className="responsive-mobile">
                    {/* Background image (down layer) */}
                    <div 
                        className="hero-img absolute inset-0 bg-no-repeat bg-cover bg-center z-0" 
                        style={{ backgroundImage: `url(${homeHero})` }}
                    />



                    {/* Smoke video (upper layer) */}
                    <video
                        src={smoke}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 md:w-full md:h-full object-cover z-10 pointer-events-none object-center opacity-50 mix-blend-hard-light md:top-0 top-[5%] h-[90%]  rounded-[2rem] md:px-0"
                    ></video>
                </div>
                <div className="p-4 flex flex-col md:justify-center max-w-7xl mx-auto">
                    <div className="relative h-dvh">
                        <h1
                            className="text-[#f4efe7] text-start text-4xl md:text-8xl font-bold tracking-wider lg:absolute lg:left-2 uppercase pt-24 md:pt-0"
                            style={{ textShadow: '2px 2px 4px #2a2725' }}
                        >
                            OnCall Hamilton
                        </h1>

                        <div className="w-full h-auto lg:absolute lg:top-24 md:bottom-[8%] lg:bottom-[9%] flex md:flex-row flex-col md:justify-between md:items-end mt-12 lg:mt-0">
                            <h2
                                className="text-start lg:mt-0 md:text-[#f4efe7] text-[#b1a696] text-2xl font-bold md:tracking-wider leading-5 flex flex-col gap-1 uppercase"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                <span>Honest</span>
                                <span>Craftsmanship</span>
                                <span>& Quality</span>
                            </h2>

                            <p
                                className="md:w-[25%] w-[80%] text-[#f4efe7] text-[0.8rem] font-bold  md:font-medium tracking-wide lg:text-end mt-2 text-justify"
                                style={{ textShadow: '2px 2px 4px #000' }}
                            >
                                Reliable residential and commercial renovation and maintenance services in the heart of Hamilton.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
