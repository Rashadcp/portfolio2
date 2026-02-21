import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-line", {
            scaleY: 0,
            transformOrigin: "center top",
            duration: 1.5,
            ease: "power4.inOut",
        })
        tl.from(".hero-title-word", {
            y: "110%",
            rotateX: -10,
            opacity: 0,
            stagger: 0.1,
            duration: 1.5,
            ease: "power4.out",
        }, "-=0.5")
            .from(".hero-sub", {
                opacity: 0,
                y: 20,
                duration: 1,
                ease: "power2.out",
            }, "-=1")
            .from(".hero-scroll", {
                opacity: 0,
                y: -20,
                duration: 1,
                ease: "sine.inOut",
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-studio-bg px-6">

            {/* Center Line Decoration */}
            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5 hero-line z-0" />

            <div className="max-w-[90vw] w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                {/* Left Info */}
                <div className="md:col-span-3 text-right hidden md:block hero-sub space-y-6 self-end pb-32">
                    <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-studio-muted mb-2">Location</span>
                        <p className="text-white text-sm font-medium">Kerala, IN</p>
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase tracking-[0.2em] font-mono text-studio-muted mb-2">Status</span>
                        <p className="text-studio-accent text-sm font-medium flex items-center justify-end gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-studio-accent animate-pulse" />
                            Available
                        </p>
                    </div>
                </div>

                {/* Main Typo */}
                <div className="md:col-span-6 text-center space-y-6">
                    <h1 className="text-[12vw] md:text-[8vw] font-display font-medium leading-[0.8] tracking-tighter text-white mix-blend-difference">
                        <div className="overflow-hidden">
                            <span className="block hero-title-word">DESIGN</span>
                        </div>
                        <div className="overflow-hidden italic text-studio-muted font-light">
                            <span className="block hero-title-word">&</span>
                        </div>
                        <div className="overflow-hidden text-studio-accent">
                            <span className="block hero-title-word">CODE</span>
                        </div>
                    </h1>
                </div>

                {/* Right Info */}
                <div className="md:col-span-3 text-left hidden md:block hero-sub space-y-6 self-end pb-32 pl-8 border-l border-white/5">
                    <p className="text-studio-text text-sm font-light leading-relaxed max-w-[200px]">
                        I create digital experiences that balance aesthetic purity with technical precision.
                    </p>
                </div>
            </div>

            {/* Mobile Info (Visible only on small screens) */}
            <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end md:hidden hero-sub">
                <div className="text-xs font-mono text-studio-muted uppercase tracking-widest">
                    Dev • 2026
                </div>
                <div className="text-xs font-mono text-studio-accent uppercase tracking-widest animate-pulse">
                    Scroll
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-4 hero-scroll">
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-studio-muted rotate-90 origin-center translate-y-8">Scroll</span>
                <div className="h-24 w-[1px] bg-white/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-movedown" />
                </div>
            </div>
        </section>
    );
};
