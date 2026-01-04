import { useState } from 'react';
import { Check, Copy, ArrowRight, Terminal } from 'lucide-react';
import clsx from 'clsx';

const Instructions = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('chmod +x trakbit');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-12 max-w-3xl mx-auto px-4 z-10 relative mb-32">
            <div className="bg-[#121212]/80 rounded-2xl border border-white/5 p-8 backdrop-blur-md shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />

                <div className="space-y-8">
                    {/* Step 1: Upstox API Token */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-blue-400">
                                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-blue-400/30 text-[10px] font-bold">1</span>
                                <h3 className="font-semibold uppercase tracking-wider text-xs">Prerequisite</h3>
                            </div>
                            <p className="text-gray-300 text-lg font-medium">
                                Upstox API Access Token
                            </p>
                            <p className="text-gray-500 text-sm mt-1 max-w-sm">
                                Required to fetch real-time data. Create an app to get your token.
                            </p>
                        </div>

                        <a
                            href="https://account.upstox.com/developer/apps"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all text-sm font-medium flex items-center gap-2"
                        >
                            Get Access Token
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Recommended Terminal */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/5 pb-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-purple-400">
                                <Terminal className="w-4 h-4" />
                                <h3 className="font-semibold uppercase tracking-wider text-xs">Recommendation</h3>
                            </div>
                            <p className="text-gray-300 text-lg font-medium">
                                Use Ghostty Terminal
                            </p>
                            <p className="text-gray-500 text-sm mt-1 max-w-sm">
                                For the best experience, we strongly recommend running this application using Ghostty.
                            </p>
                        </div>

                        <a
                            href="https://ghostty.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all text-sm font-medium flex items-center gap-2"
                        >
                            Download Ghostty
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Step 2: Permissions */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-green-400">
                                <span className="flex items-center justify-center w-5 h-5 rounded-full border border-green-400/30 text-[10px] font-bold">2</span>
                                <h3 className="font-semibold uppercase tracking-wider text-xs">Quick Start</h3>
                            </div>
                            <p className="text-gray-300 text-lg font-medium">
                                Setup for macOS & Linux
                            </p>
                            <p className="text-gray-500 text-sm mt-1">
                                Make the binary executable before running.
                            </p>
                        </div>

                        <div
                            onClick={handleCopy}
                            className="w-full md:w-auto bg-black rounded-lg p-1 pl-4 pr-1 font-mono text-sm border border-white/10 flex items-center justify-between gap-4 group cursor-pointer hover:border-green-500/30 hover:shadow-lg hover:shadow-green-500/5 transition-all duration-300"
                        >
                            <code className="text-gray-300 group-hover:text-green-400 transition-colors">
                                chmod +x trakbit
                            </code>
                            <div className={clsx(
                                "p-2 rounded bg-white/5 transition-all",
                                copied ? "text-green-400 bg-green-500/10" : "text-gray-500 group-hover:text-white"
                            )}>
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructions;
