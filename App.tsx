import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DemoSearch from './components/DemoSearch';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

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