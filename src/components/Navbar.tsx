import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        gsap.from(".nav-bar", {
            y: -100,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
        });
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center max-w-[90vw] mx-auto nav-bar text-studio-text md:p-8">
            <a href="#" className="font-display font-medium text-2xl tracking-tight leading-none group hover:text-studio-accent transition-colors">
                MASHAD<span className="text-studio-accent text-3xl leading-none group-hover:text-white transition-colors">.</span>CP
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-12 text-xs font-mono font-medium uppercase tracking-[0.2em]">
                {["About", "Skills", "Projects", "Contact"].map((item, i) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative group overflow-hidden inline-block hover:text-white transition-colors py-1"
                    >
                        <span className="block translate-y-0 group-hover:-translate-y-[120%] transition-transform duration-300">
                            {`0${i + 1} • ${item}`}
                        </span>
                        <span className="absolute top-0 left-0 translate-y-[120%] group-hover:translate-y-0 transition-transform duration-300 text-studio-accent">
                            {`0${i + 1} • ${item}`}
                        </span>
                    </a>
                ))}
            </div>

            <a href="#projects" className="hidden md:block text-xs uppercase font-bold border-b border-white/20 pb-1 hover:border-studio-accent hover:text-studio-accent transition-colors">
                Available for Work
            </a>

            {/* Mobile Toggle */}
            <button
                className="md:hidden text-white transition-transform active:scale-95"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-studio-bg z-40 md:hidden flex flex-col items-center justify-center space-y-8">
                    {["About", "Skills", "Projects", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="font-display text-4xl font-medium hover:text-studio-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
