import Hero from './components/Hero';
import TerminalDemo from './components/TerminalDemo';
import KeyboardShortcuts from './components/KeyboardShortcuts';
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
        <KeyboardShortcuts />
        <Downloads />
        <Instructions />
      </main>

      <footer className="py-16 text-center text-gray-500 text-sm z-10 relative border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">Trakbit</h3>
            <p className="text-gray-500 text-xs">
              Owned and operated by <span className="text-gray-400 font-medium">Trakbit Techsolutions LLP</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-xs text-justify max-w-3xl mx-auto border-t border-white/5 pt-8">
            <div className="space-y-2">
              <h4 className="font-semibold text-gray-400 uppercase tracking-wider">Disclaimer</h4>
              <p className="leading-relaxed">
                Trakbit is an independent analytical tool and is <strong className="text-gray-400">not affiliated, associated, or endorsed by Upstox</strong> or any other broker. All trademarks belong to their respective owners.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-red-400/80 uppercase tracking-wider">Risk Disclosure</h4>
              <p className="leading-relaxed">
                Trading options involves <strong className="text-gray-400">substantial risk of loss</strong> and is not suitable for every investor. This tool is for educational and analytical purposes only. We are not SEBI registered advisors. The developers and Trakbit Techsolutions LLP are not responsible for any financial losses incurred.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
