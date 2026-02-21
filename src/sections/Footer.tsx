export const Footer = () => {
    return (
        <footer className="px-6 py-8 bg-studio-bg text-studio-muted border-t border-white/5 font-sans relative z-10">
            <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row justify-between items-end gap-8">

                <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Local Time</span>
                    <span className="text-xl font-display text-white">{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} IST</span>
                </div>

                <div className="flex flex-col gap-2 text-right">
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Legal</span>
                    <span className="text-xs uppercase hover:text-white transition-colors cursor-pointer">Privacy & Terms</span>
                </div>

                <div className="text-[10px] uppercase tracking-widest opacity-30 text-center md:text-right w-full md:w-auto mt-8 md:mt-0">
                    © 2026 M. RASHAD
                </div>
            </div>
        </footer>
    );
};
