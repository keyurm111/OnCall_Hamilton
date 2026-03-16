import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const whyChooseData = [
    {
        num: "01",
        title: "Professional Staff",
        desc: "Our skilled team delivers exceptional, efficient results with attention to detail, reliability, and a strong focus on customer satisfaction."
    },
    {
        num: "02",
        title: "Satisfaction Guarantee",
        desc: "We guarantee top-quality service and your complete satisfaction. If you're not happy, we'll make it right your satisfaction is our priority."
    },
    {
        num: "03",
        title: "Thorough Evaluation",
        desc: "We assess your space to ensure precise, tailored solutions, addressing challenges and delivering the highest quality results."
    },
    {
        num: "04",
        title: "Flexible & Low-Cost",
        desc: "We provide flexible, affordable services with quality results, offering installment plans and credit card payments."
    }
];

const WhyChoose = () => {
    useGSAP(() => {
        const triggers = gsap.utils.toArray('.reason-card');

        triggers.forEach((trigger, i) => {
            gsap.from(trigger, {
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: i * 0.1
            });
        });

        gsap.from(".why-choose-header", {
            scrollTrigger: {
                trigger: ".why-choose-section",
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });
    });

    return (
        <section className="why-choose-section w-full bg-[#181717] py-32 px-6 md:px-20 text-[#f4efe7]">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                <div className="lg:w-1/3 why-choose-header">
                    <p className="text-[0.7rem] font-bold text-[#b1a696] choose-subtitle mb-6 uppercase tracking-widest italic">
                        The OnCall standard
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold italic uppercase leading-tight mb-8">
                        Why<br />Choose<br />Us
                    </h2>
                    <p className="text-[#a79c8d] text-sm md:text-base leading-relaxed italic pr-4">
                        We don’t just offer services; we deliver peace of mind. Experience the difference a dedicated, professional team can make.
                    </p>
                </div>
                
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {whyChooseData.map((item, index) => (
                        <div key={index} className="reason-card flex flex-col gap-4 border-t border-[#3a3530] pt-8 group">
                            <div className="flex justify-between items-start">
                                <h3 className="text-2xl md:text-3xl font-bold italic uppercase group-hover:text-[#b1a696] transition-colors duration-300 w-3/4">
                                    {item.title}
                                </h3>
                                <span className="text-[#524e4b] text-xl font-bold">{item.num}</span>
                            </div>
                            <p className="text-[#a79c8d] text-sm md:text-base leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
