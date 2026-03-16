import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar/Navbar";
import { useEffect } from "react";
import Preloader from "../components/Preloader/Preloader";
import PreloaderII from "../components/Preloader/PreloaderII";
import ReserveBtn from "../components/Buttons/ReserveBtn";
import Logo from "../components/Buttons/Logo";
import Footer from "../components/Footer/Footer";
import FooterTitle from "../components/Footer/FooterTitle";
import FooterBanner from "../components/FooterBanner/FooterBanner";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
if (typeof window !== "undefined") {
    ScrollTrigger.clearScrollMemory("manual");
}

const MainLayout = () => {

    const location = useLocation();

    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1.5,
            effects: true,
        });

        return () => {
            smoother.kill();
        };
    });

    useEffect(() => {
        let frameCount = 0;
        
        const forceScrollTop = () => {
            // Modern instant scroll reset
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });

            const smoother = ScrollSmoother.get();
            if (smoother) {
                smoother.scrollTop(0);
                smoother.paused(true);
            }
        };

        const tickReset = () => {
            forceScrollTop();
            frameCount++;
            
            // Hold the 0 position for 10 frames to beat any competing scripts
            if (frameCount < 10) {
                requestAnimationFrame(tickReset);
            } else {
                const smoother = ScrollSmoother.get();
                if (smoother) {
                    smoother.paused(false);
                    smoother.scrollTop(0);
                    // Force refresh twice - once instantly, once after paint
                    ScrollTrigger.refresh(true);
                }
            }
        };

        // Start the reset race
        tickReset();

        // Final safety net for slow-rendering assets (like HD images)
        const finalCheck = setTimeout(() => {
            const smoother = ScrollSmoother.get();
            if (smoother) {
                smoother.scrollTop(0);
                ScrollTrigger.refresh();
            }
        }, 300);

        return () => clearTimeout(finalCheck);
    }, [location.pathname]);

    return (
        <>
            <PreloaderII />
            <Logo />
            {/* <ReserveBtn /> */}
            <Navbar />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <Outlet /> {/* Hero, About, Contact, etc. */}
                        <FooterBanner />
                        <Footer />
                        <FooterTitle />
                    </main>
                </div>
            </div>
        </>
    );
};

export default MainLayout;