import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Background = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Very subtle, slow movement of a large gradient mesh
        gsap.to(".bg-gradient", {
            backgroundPosition: "100% 100%",
            duration: 60,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#0a0a0a] overflow-hidden pointer-events-none">
            {/* Ultra-subtle Gradient Mesh */}
            <div
                className="bg-gradient absolute inset-0 opacity-20"
                style={{
                    background: "radial-gradient(circle at 50% 50%, #1a1a1a 0%, #0a0a0a 100%)",
                    backgroundSize: "200% 200%",
                }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.07] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Subtle Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>
    );
};
