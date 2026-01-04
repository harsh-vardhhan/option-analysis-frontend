import { Command, AppWindow, Terminal, Download, ArrowRight } from 'lucide-react';
import clsx from 'clsx';

const Downloads = () => {
    const links = {
        mac: "https://trakbit-releases.s3.ap-south-1.amazonaws.com/builds/macos-latest/trakbit",
        linux: "https://trakbit-releases.s3.ap-south-1.amazonaws.com/builds/ubuntu-latest/trakbit",
        windows: "https://trakbit-releases.s3.ap-south-1.amazonaws.com/builds/windows-latest/trakbit.exe"
    };

    return (
        <section className="py-20 px-4 text-center z-10 relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get Trakbit</h2>
            <p className="text-gray-400 mb-16 max-w-xl mx-auto">
                Available for all major platforms. Download the latest build and start tracking in seconds.
            </p>

            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
                <DownloadCard
                    icon={<Command className="w-8 h-8" />}
                    platform="macOS"
                    link={links.mac}
                    note="Requires chmod +x"
                    accent="from-blue-500/20 to-blue-600/5"
                    borderColor="border-blue-500/20"
                />
                <DownloadCard
                    icon={<Terminal className="w-8 h-8" />}
                    platform="Linux"
                    link={links.linux}
                    note="Requires chmod +x"
                    accent="from-orange-500/20 to-orange-600/5"
                    borderColor="border-orange-500/20"
                />
                <DownloadCard
                    icon={<AppWindow className="w-8 h-8" />}
                    platform="Windows"
                    link={links.windows}
                    note=".exe installer"
                    accent="from-blue-400/20 to-cyan-400/5"
                    borderColor="border-blue-400/20"
                />
            </div>
        </section>
    );
};

const DownloadCard = ({ icon, platform, link, note, accent, borderColor }) => (
    <a
        href={link}
        className={clsx(
            "group relative flex flex-col items-start p-8 rounded-3xl bg-[#121212] border transition-all duration-300 w-80",
            "hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10",
            borderColor || "border-white/10"
        )}
    >
        <div className={clsx(
            "absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
            accent
        )} />

        <div className="z-10 w-full">
            <div className="flex justify-between items-start w-full mb-6">
                <div className="p-3 rounded-2xl bg-white/5 text-gray-200 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 text-gray-400 group-hover:text-green-400 transition-colors">
                    <Download className="w-5 h-5" />
                </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 text-white">{platform}</h3>
            <p className="text-sm text-gray-500 mb-6 font-mono">Latest Build</p>

            <div className="mt-auto w-full pt-6 border-t border-white/5 flex justify-between items-center text-sm">
                <span className="text-gray-400">{note || "Binary"}</span>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all" />
            </div>
        </div>
    </a>
);

export default Downloads;
