import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import DemoSearch from './components/DemoSearch.tsx';
import Features from './components/Features.tsx';
import Pricing from './components/Pricing.tsx';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-blue selection:text-black">
      <Header />
      <main>
        <Hero />
        <div className="bg-gradient-to-b from-black via-blue-900/10 to-black py-10">
            <DemoSearch />
        </div>
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;