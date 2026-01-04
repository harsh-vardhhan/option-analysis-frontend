import { ShieldCheck, Lock, ServerOff, Terminal, Wifi } from 'lucide-react';

const SecurityFeatures = () => {
    const features = [
        {
            icon: <Terminal className="w-6 h-6 text-green-400" />,
            title: "TUI Desktop Application",
            description: "Runs locally on your machine, leveraging the power of your own hardware."
        },
        {
            icon: <Wifi className="w-6 h-6 text-emerald-400" />,
            title: "Direct API Connection",
            description: "Fetches data directly from Upstox API. No middleman servers involved."
        },
        {
            icon: <Lock className="w-6 h-6 text-green-400" />,
            title: "Local Token Storage",
            description: "Your access token stays strictly on your computer. We never see it."
        },
        {
            icon: <ServerOff className="w-6 h-6 text-emerald-400" />,
            title: "No Server Storage",
            description: "We don't store any of your personal data or trading history."
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
            title: "Purely Analytics",
            description: "Read-only access. Trakbit cannot place trades on your behalf."
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-white via-gray-200 to-gray-500 bg-clip-text text-transparent mb-4">
                        Privacy First Design
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Your data security is our top priority. We've built Trakbit to be transparent and secure by default.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="group p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-green-500/20 backdrop-blur-sm">
                            <div className="p-3 rounded-lg bg-green-500/10 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-200 mb-2 group-hover:text-green-400 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SecurityFeatures;
