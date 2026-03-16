// import './marqueesticky.css';
import MarqueeText from "../Marquee/MarqueeText";
import StickyCols from "../StickyCols/StickyCols";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSticky = () => {
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".pin-con",
                start: "bottom 80%",
                end: "bottom 50%",
                scrub: 1,
                // markers: true,
            },
        });

        // 1️⃣ Fade out the spacer and marquee instead of physically removing them from the DOM
        tl.to(".marquee-con-none", { opacity: 0, ease: "none", duration: 1 });
    });

    return (
        <section className=" w-full overflow-hidden">
            <div className="pin-con relative">
                <div className="pl-8">
                    <p className="text-[0.7rem] text-[#eae5dd] choose-subtitle uppercase tracking-widest italic">
                        Explore our featured
                        <br />
                        property transformations —
                    </p>
                </div>

                <div className="marquee-con-none absolute top-0 -z-1">
                    <MarqueeText />
                </div>

                {/* SPACE RESERVER — extremely important */}
                <div className="sticky-spacer w-full h-[20vh]" />
            </div>
        </section>
    );
};

export default MarqueeSticky;
