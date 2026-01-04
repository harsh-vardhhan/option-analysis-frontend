import React from 'react';

const TerminalDemo = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-4 mb-24 relative z-10 group perspective-1000">
            {/* Decorative glow behind terminal */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#09090b]/90 backdrop-blur-xl transform transition-transform duration-500 group-hover:scale-[1.01]">
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-[#fa5f57] border border-red-600/20" />
                        <div className="w-3 h-3 rounded-full bg-[#febb2e] border border-yellow-600/20" />
                        <div className="w-3 h-3 rounded-full bg-[#28c840] border border-green-600/20" />
                    </div>
                    <div className="text-xs text-gray-500 font-mono">trakbit — -zsh — 80x24</div>
                    <div className="w-12" /> {/* Spacer for centering */}
                </div>

                {/* Terminal Content / GIF Placeholder */}
                <div className="aspect-video w-full flex items-center justify-center bg-black/40 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>

                    <img src="/demo.gif" alt="Trakbit Demo" className="absolute inset-0 w-full h-full object-cover opacity-90" />

                </div>
            </div>
        </div>
    );
};

export default TerminalDemo;
