import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    useGSAP(() => {
        gsap.from(".contact-char", {
            scrollTrigger: {
                trigger: "#contact",
                start: "top 70%",
            },
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1.2,
            ease: "power4.out",
        });
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent! (Mock)");
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-[90vw] mx-auto border-t border-white/5 relative bg-studio-bg text-studio-text">
            <div className="grid md:grid-cols-2 gap-16 md:gap-32 pt-16">

                <div className="space-y-12 md:sticky top-32 self-start">
                    <span className="block text-[10px] uppercase tracking-[0.3em] font-mono text-studio-accent pb-4 border-b border-white/10 w-fit">
                        Initiate Contact
                    </span>
                
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium leading-[0.9] text-white">
                        <span className="contact-char block">Let's</span>
                        <span className="contact-char block italic text-studio-muted">Start</span>
                        <span className="contact-char block">Something.</span>
                    </h2>

                    <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
                        <a href="mailto:hello@rashad.dev" className="text-xl md:text-2xl font-light hover:text-studio-accent transition-colors flex items-center gap-4 group">
                            <span className="w-2 h-2 rounded-full bg-white group-hover:bg-studio-accent transition-colors" />
                            hello@rashad.dev
                        </a>
                        <a href="#" className="text-xl md:text-2xl font-light hover:text-studio-accent transition-colors flex items-center gap-4 group">
                            <span className="w-2 h-2 rounded-full bg-white group-hover:bg-studio-accent transition-colors" />
                            @rashad_cp
                        </a>
                    </div>

                    <div className="flex gap-4 pt-12">
                        {[Linkedin, Github, Twitter, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-500 rounded-full group">
                                <Icon size={18} className="group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-12 pt-16 md:pt-32">
                    <div className="group relative">
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display text-white placeholder:text-white/10 outline-none focus:border-studio-accent transition-colors"
                            placeholder="Your Name"
                        />
                        <span className="absolute top-0 right-0 text-[10px] uppercase tracking-widest text-studio-muted opacity-0 group-hover:opacity-100 transition-opacity">Required *</span>
                    </div>
                    <div className="group relative">
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display text-white placeholder:text-white/10 outline-none focus:border-studio-accent transition-colors"
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="group relative">
                        <textarea
                            rows={1}
                            required
                            className="w-full bg-transparent border-b border-white/20 py-4 text-2xl md:text-4xl font-display text-white placeholder:text-white/10 outline-none focus:border-studio-accent transition-colors resize-none h-auto"
                            placeholder="Tell me about it..."
                            onInput={(e) => {
                                e.currentTarget.style.height = 'auto';
                                e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                            }}
                        />
                    </div>

                    <div className="pt-12 flex justify-end">
                        <button
                            type="submit"
                            className="px-8 py-4 bg-white text-black font-display text-xl hover:bg-studio-accent hover:text-white transition-colors duration-500 flex items-center gap-4 group"
                        >
                            Send Proposal
                            <div className="w-8 h-[1px] bg-black group-hover:bg-white transition-colors" />
                        </button>
                    </div>
                </form>

            </div>
        </section>
    );
};
