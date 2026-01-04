import React from 'react';
import Hero from './components/Hero';
import TerminalDemo from './components/TerminalDemo';
import Downloads from './components/Downloads';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white selection:bg-green-500/30 selection:text-green-200 overflow-x-hidden">
      {/* Global styling wrapper */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-50"></div>

      <main className="relative">
        <Hero />
        <TerminalDemo />
        <Downloads />
        <Instructions />
      </main>

      <footer className="py-12 text-center text-gray-600 text-sm z-10 relative border-t border-white/5 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">&copy; {new Date().getFullYear()} Trakbit. All rights reserved.</p>

          <div className="space-y-2 text-xs text-gray-700 max-w-2xl mx-auto">
            <p>
              Trakbit is an independent tool and is <span className="text-gray-500">not affiliated, associated, or endorsed by Upstox</span>.
            </p>
            <p>
              <span className="font-semibold text-gray-600">Risk Disclosure:</span> This tool is for educational and analytical purposes only.
              The developers are not responsible for any financial losses incurred while using this software.
              Trading options involves high risk.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
