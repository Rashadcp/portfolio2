import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Refuel Energy",
        desc: "A premium e-commerce platform for an energy drink brand, featuring dynamic interactions and smooth MERN stack integration.",
        tech: ["React", "Express", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1622543953490-0b70d302482c?q=80&w=2832&auto=format&fit=crop",
        github: "#",
        link: "#",
    },
];

export const Projects = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(".proj-mask", {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            },
            height: "0%",
            duration: 1.5,
            ease: "power2.inOut",
        });
    }, { scope: containerRef });

    return (
        <section id="projects" className="py-24 px-6 max-w-[90vw] mx-auto border-t border-white/5 relative">
            <div className="grid md:grid-cols-12 gap-16 pt-8 items-start">
                <div className="md:col-span-4 sticky top-32">
                    <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-studio-accent pb-4 border-b border-white/10 w-fit">
                        Selected Works
                    </span>
                </div>

                <div className="md:col-span-8 flex flex-col gap-32">
                    {projects.map((project, i) => (
                        <div key={i} className="group cursor-pointer">
                            {/* Title & Desc */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between font-display text-white mb-6 border-b border-white/10 pb-6 group-hover:border-white transition-colors duration-700">
                                <h3 className="text-4xl md:text-6xl font-medium tracking-tight group-hover:italic transition-all duration-500">
                                    {project.title}
                                </h3>
                                <span className="text-[10px] font-mono uppercase tracking-widest text-studio-muted mt-2 md:mt-0 group-hover:text-studio-accent transition-colors">
                                    {project.tech.join(" / ")}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="w-full aspect-[16/10] relative overflow-hidden bg-studio-card">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-white z-20 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <ArrowUpRight size={24} />
                                </div>

                                <div className="absolute inset-0 bg-studio-bg proj-mask z-10 bottom-0" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-90 group-hover:filter-none group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                                />
                            </div>
                        </div>
                    ))}

                    {/* Archive Link */}
                    <div className="py-12 border-t border-b border-white/10 flex justify-between items-center group hover:bg-white/5 transition-colors px-4 cursor-pointer">
                        <span className="font-display text-2xl md:text-4xl text-studio-muted group-hover:text-white transition-colors italic">Archive</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-studio-muted group-hover:text-studio-accent transition-colors">View All Projects &rarr;</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
