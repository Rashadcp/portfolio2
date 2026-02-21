import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const skills = [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Redux", "Node.js", "Express", "MongoDB", "PostgreSQL"
];

export const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".skill-list-item", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "circ.out",
        });
    }, { scope: containerRef });

    return (
        <section id="skills" className="py-24 px-6 max-w-[90vw] mx-auto border-t border-white/5 relative">
            <div className="grid md:grid-cols-12 gap-16 pt-8 items-start">
                <div className="md:col-span-4 sticky top-32">
                    <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-studio-accent pb-4 border-b border-white/10 w-fit">
                        The Tools
                    </span>
                </div>
                <div className="md:col-span-8 flex flex-wrap gap-x-8 gap-y-4 md:gap-y-8" ref={containerRef}>
                    {skills.map((skill) => (
                        <div key={skill} className="skill-list-item group relative overflow-hidden inline-block cursor-default">
                            <span className="text-3xl md:text-5xl lg:text-7xl font-display font-medium text-studio-muted/30 group-hover:text-white transition-colors duration-500 leading-none">
                                {skill}
                                <span className="text-lg md:text-xl lg:text-2xl align-top text-studio-accent opacity-0 group-hover:opacity-100 transition-opacity ml-1">.</span>
                            </span>
                            <div className="h-[1px] bg-studio-accent w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
