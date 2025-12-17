import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { ChatDemo } from './components/ChatDemo';
import { FeatureCard } from './components/FeatureCard';
import { QR_CODE_URL } from './constants';
import {
  MessageSquareText,
  Receipt,
  FileText,
  ArrowRight,
  CheckCircle2,
  Zap,
  Smartphone
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-kyber-black text-kyber-light selection:bg-white selection:text-black overflow-x-hidden">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-kyber-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-white transition-colors">How it works</a>
            <a
              href="#get-started"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
            >
              Start Now
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-black to-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-300">Live on SMS & RCS</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Your business,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">run via text.</span>
            </h1>

            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              No apps to download. No passwords to remember.
              Just text Kyber to get quotes, invoices, and expenses done instantly.
              Designed for contractors who move fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-gray-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:border-gray-500 transition-colors"
              >
                See Features
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-black"></div>
              </div>
              <p>Trusted by 500+ Contractors & HVAC Pros</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            {/* Decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Value Props / Features */}
      <section id="features" className="py-24 bg-kyber-dark relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Everything you need.<br />Nothing you don't.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">We stripped away the complicated dashboards. Kyber understands your natural language and context.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Instant Quotes"
              description="Text the job details and markup. Kyber generates a professional PDF quote and emails it to you or your client instantly."
              icon={<FileText className="w-8 h-8" />}
            />
            <FeatureCard
              title="Auto Invoicing"
              description="Job done? Just tell Kyber. It pulls the quote data, converts it to an invoice, and sends it for payment collection."
              icon={<Receipt className="w-8 h-8" />}
            />
            <FeatureCard
              title="Expense Tracking"
              description="Don't lose receipts. Snap a photo and text it to Kyber. It reads the data and categorizes it automatically."
              icon={<Zap className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* How It Works (Steps) */}
      <section id="how-it-works" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900 border border-gray-800 p-8 rounded-2xl font-mono text-sm leading-loose text-gray-300 shadow-2xl">
                <p><span className="text-blue-400">User:</span> Need to bill Smith Residence. 3 hours labor, plus the compressor part.</p>
                <p className="mt-4"><span className="text-green-400">Kyber:</span> I found the open quote for Smith Residence. Adding compressor ($450) + 3hrs Labor ($255). Total Invoice: $705.</p>
                <p className="mt-4"><span className="text-green-400">Kyber:</span> Invoice #1024 sent to smith@email.com. </p>
                <p className="mt-4"><span className="text-blue-400">User:</span> Thanks.</p>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Context aware.<br />Business ready.</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Scan & Connect</h4>
                    <p className="text-gray-400 mt-2">No signup forms. Just scan the QR code to open a chat in your preferred messaging app.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold border border-gray-600">2</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Text like a Human</h4>
                    <p className="text-gray-400 mt-2">Describe the job naturally. Kyber extracts the line items, prices, and client details.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold border border-gray-600">3</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Get Paid</h4>
                    <p className="text-gray-400 mt-2">Kyber handles the PDF generation and emailing. You just focus on the work.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Industrial Texture Overlay */}
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

          <div className="relative z-10 flex flex-col items-center">
            <Logo className="mb-8 invert" />

            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
              Ready to simplify?
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Join the waiting list or start the beta today by scanning the code below.
            </p>

            <div className="bg-black p-4 rounded-2xl shadow-2xl mb-8 group transition-transform hover:scale-105 duration-300">
              <img
                src={QR_CODE_URL}
                alt="Scan to start Kyber"
                className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-white"
              />
            </div>

            <div className="flex items-center gap-2 text-sm font-bold text-black uppercase tracking-widest">
              <Smartphone className="w-4 h-4" />
              <span>Scan to Start Chat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <p className="text-xs text-gray-600">© 2024 Kyber Industrial. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;