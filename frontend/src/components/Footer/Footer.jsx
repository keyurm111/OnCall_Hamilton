import { FaBehance } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaDribbble } from "react-icons/fa";

import MarqueeText from '../Marquee/MarqueeText';

const Footer = () => {
    return (
        <section id="footer-section" className='w-screen h-dvh px-6 md:px-20 mt-10'>
            <div className="max-w-7xl mx-auto">
                <p className='text-[.7rem] text-[#eae5dd] choose-subtitle mt-10 uppercase tracking-widest'>Ready for a transformation? <br />Contact OnCall Hamilton<span>®</span></p>
                <div>
                    <MarqueeText />
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className='flex justify-between items-center text-2xl mt-14'>
                    <h3 className='text-[#b1a696] uppercase'>Our mission is to provide<br />
                        honest craftsmanship and<br />
                        reliable property services.<br /><br />
                        Experience high-quality<br />
                        renovation & maintenance —<a href="/contact" className='text-[#f4efe7] hover:text-[#c4c1b9] underline'> get a quote.</a>
                    </h3>

                    <div className='flex flex-col justify-center items-end uppercase italic text-sm tracking-widest'>
                        <a href="/about" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>About us</a>
                        <a href="/services" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>Our Services</a>
                        <a href="/projects" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>Portfolio</a>
                        <a href="/blogs" className='text-[#f2ede5] hover:text-[#b1a696] transition-colors'>Insights</a>
                    </div>
                </div>
                <div className="w-full flex justify-between items-center mt-20">
                    <div className="flex justify-start items-center gap-1">
                        <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:bg-[#c4c1b9] hover:text-[#181717] transition-all cursor-pointer'><FaBehance className="text-xl" /></div>
                        <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:bg-[#c4c1b9] hover:text-[#181717] transition-all cursor-pointer'><FaInstagram className="text-xl" /></div>
                        <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:bg-[#c4c1b9] hover:text-[#181717] transition-all cursor-pointer'><CiLinkedin className="text-xl" /></div>
                        <div className='border-[1px] border-[#c4c1b9] rounded-full p-3 text-[#f2ede5] hover:bg-[#c4c1b9] hover:text-[#181717] transition-all cursor-pointer'><FaDribbble className="text-xl" /></div>
                    </div>

                    <div className="flex flex-col items-end">
                        <p className="text-[1.2rem] md:text-[1.5rem] text-[#f4efe7] font-bold uppercase tracking-tight whitespace-nowrap">
                            OnCall Hamilton<span>®</span>
                        </p>
                        <p className="text-[0.7rem] text-[#b1a696] uppercase tracking-[0.2em] font-medium mt-1">
                            Professional Property Care
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;