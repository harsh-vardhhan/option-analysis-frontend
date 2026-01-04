import React from 'react';
import { Command, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, CornerDownLeft, Space } from 'lucide-react';

const KeyboardShortcuts = () => {
    return (
        <section className="py-24 px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Master the <span className="text-green-400">Keyboard</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Navigate, trade, and manage positions without ever touching your mouse.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Navigation Group */}
                    <div className="bg-[#121212]/50 rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-colors backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-gray-200 border-b border-white/5 pb-4">
                            <Command className="w-5 h-5 text-green-400" />
                            Navigation
                        </h3>

                        <div className="space-y-6">
                            <ShortcutRow
                                keys={['↑', '↓', '←', '→']}
                                label="Navigate grid cells"
                            />
                            <ShortcutRow
                                keys={['Tab']}
                                label="Switch focus: Option Chain ↔ Strategy Panel"
                            />
                        </div>
                    </div>

                    {/* Actions Group */}
                    <div className="bg-[#121212]/50 rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-colors backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-8 flex items-center gap-3 text-gray-200 border-b border-white/5 pb-4">
                            <span className="text-green-400 font-mono text-lg">$_</span>
                            Trading Actions
                        </h3>

                        <div className="space-y-6">
                            <ShortcutRow
                                keys={['B']}
                                label="Buy option (+1 qty)"
                                accent
                            />
                            <ShortcutRow
                                keys={['S']}
                                label="Sell option (-1 qty)"
                                accent
                            />
                            <ShortcutRow
                                keys={['Del']}
                                label="Remove position"
                            />
                            <ShortcutRow
                                keys={['Space']}
                                label="Select for moving"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ShortcutRow = ({ keys, label, accent }) => (
    <div className="flex items-center justify-between group">
        <div className="flex items-center gap-2">
            {keys.map((k, i) => (
                <kbd
                    key={i}
                    className={`
                min-w-[2rem] px-2 py-1 rounded-md text-sm font-mono font-bold border-b-2 transition-all
                ${accent
                            ? 'bg-green-500/10 border-green-500/30 text-green-400 group-hover:bg-green-500/20'
                            : 'bg-[#2a2a2a] border-[#1a1a1a] text-gray-300 group-hover:bg-[#333]'
                        }
            `}
                >
                    {k}
                </kbd>
            ))}
        </div>
        <span className="text-gray-400 text-sm font-medium group-hover:text-gray-200 transition-colors">
            {label}
        </span>
    </div>
);

export default KeyboardShortcuts;
