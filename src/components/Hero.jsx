const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-32 pb-12 text-center z-10 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-green-500/10 via-emerald-500/5 to-transparent blur-3xl -z-10 rounded-full opacity-50 pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-green-400 font-medium mb-6 backdrop-blur-sm animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                v1.0.0 Stable Release
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent drop-shadow-sm px-4">
                Trakbit
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4 leading-relaxed font-light">
                The <span className="text-green-400 font-normal">Keyboard-First</span> Options Analytics Tool.
                <br className="hidden md:block" />
                Design option strategies simply using your keyboard.
            </p>
        </section >
    );
};

export default Hero;
