import React from 'react';
import { ChevronRight, TrendingUp, MapPin, Zap, ShoppingBag } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[60%] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-sm font-medium mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Live in the CMU Ecosystem
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-5xl leading-tight">
          Eliminate Academic Friction. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">
            Find Urgent Supplies Instantly.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mb-10 leading-relaxed mx-auto">
          Supplify is the essential local material finder that provides students with instant, location-based access to urgent supplies, simultaneously guaranteeing <span className="text-white font-semibold">targeted, reliable sales</span> for local vendors within the CMU ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a 
            href="#demo"
            className="bg-brand-blue hover:bg-blue-600 text-black font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            Find Supplies Now <ChevronRight className="w-5 h-5" />
          </a>
          <a 
            href="#pricing"
            className="bg-gray-900 hover:bg-gray-800 text-white border border-gray-700 font-bold py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2"
          >
            Merchant Sign Up
          </a>
        </div>

        {/* Infographic-style Key Benefits */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            <div className="bg-brand-dark/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                    <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">Instant Access</h3>
                <p className="text-gray-400 text-sm">Locate urgent materials in seconds, not hours.</p>
            </div>
            <div className="bg-brand-dark/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                    <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">CMU Ecosystem</h3>
                <p className="text-gray-400 text-sm">Connected directly to local sari-sari stores & retailers.</p>
            </div>
            <div className="bg-brand-dark/50 border border-gray-800 p-6 rounded-2xl backdrop-blur-sm flex flex-col items-center hover:border-brand-blue/30 transition-colors">
                <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center mb-4 text-brand-blue">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-white font-bold mb-2">Targeted Sales</h3>
                <p className="text-gray-400 text-sm">High-intent traffic delivered straight to merchants.</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;