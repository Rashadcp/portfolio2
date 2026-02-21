import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".about-col", {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "circ.out",
        });
    }, { scope: sectionRef });

    return (
        <section id="about" ref={sectionRef} className="py-32 px-6 max-w-[90vw] mx-auto border-t border-white/5 relative">

            {/* Magazine Style Grid */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-16 pt-8">

                {/* Intro Side */}
                <div className="md:col-span-4 about-col space-y-8 md:sticky top-32 self-start">
                    <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-studio-accent pb-4 border-b border-white/10 w-fit">
                        The Architect
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium leading-[1.1] text-white">
                        Building the Future,<br />One Line at a Time.
                    </h2>
                    <p className="text-studio-muted leading-relaxed font-light text-sm max-w-sm">
                        I am Muhammed Rashad, a developer obsessed with the invisible details. My work bridges the gap between raw backend logic and elegant frontend interaction.
                    </p>
                </div>

                {/* Imagery Side (Asymmetrical Collage) */}
                <div className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-8 items-start about-col">
                    <div className="aspect-[3/4] bg-studio-card relative group overflow-hidden mt-12 md:mt-0">
                        <div className="absolute inset-0 bg-studio-bg opacity-0 group-hover:opacity-40 transition-opacity duration-500 z-10" />
                        <img
                            src="/photo_2025-12-03_09-53.jpg"
                            alt="Muhammed Rashad"
                            className="w-full h-full object-cover filter grayscale sepia-[0.3] contrast-[1.1] group-hover:filter-none transition-all duration-700 transform group-hover:scale-105"
                        />
                        <span className="absolute bottom-4 left-4 text-[10px] tracking-widest uppercase font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity z-20">
                            / Personal Profile
                        </span>
                    </div>
                    <div className="space-y-4 md:space-y-8 pt-8 md:pt-24">
                        <div className="aspect-square border border-white/10 flex flex-col justify-between p-6 md:p-8 hover:bg-white/5 transition-colors duration-500">
                            <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-studio-muted">
                                Experience
                            </span>
                            <span className="text-6xl md:text-8xl font-display text-white font-medium">
                                02<span className="text-2xl align-top text-studio-accent">+</span>
                            </span>
                        </div>
                        <div className="aspect-[4/3] bg-studio-card p-6 md:p-8 flex flex-col justify-end group hover:bg-studio-accent transition-colors duration-500">
                            <h3 className="text-xl md:text-2xl font-display text-white mb-2 group-hover:text-black transition-colors">Philosophy</h3>
                            <p className="text-xs text-studio-muted leading-relaxed group-hover:text-black/80 transition-colors">
                                Minimalism is not the absence of color, but the perfection of form.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
