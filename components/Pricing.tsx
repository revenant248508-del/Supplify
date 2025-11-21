import React from 'react';
import { Check, Store, GraduationCap } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden" id="pricing">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Choose Your Role</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Whether you're studying or selling, Supplify connects the ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Student Free Tier */}
          <PricingCard 
            icon={<GraduationCap className="w-8 h-8" />}
            title="Student Account"
            price="Free"
            role="For Students"
            subtext="No subscription needed."
            features={[
              "Instant Material Search",
              "Location-based Store Finder",
              "Real-time Price Comparison",
              "Store Rating System",
              "Urgent Supply Availability Checks"
            ]}
          />

           {/* Store Pro */}
           <PricingCard 
            icon={<Store className="w-8 h-8" />}
            title="Merchant Pro"
            price="₱800"
            period="/mo"
            role="For Sari-Sari Stores & Retailers"
            isPopular={true}
            subtext="Grow your business within the campus."
            features={[
              "Guaranteed Targeted Sales Channel",
              "High-Intent Traffic (Ready Buyers)",
              "Priority Search Exposure",
              "Auto-Statistic Demand Tools",
              "Most Recommended Store Badge",
              "Product Reservation System"
            ]}
          />

        </div>
      </div>
    </section>
  );
};

const PricingCard: React.FC<{
    icon: React.ReactNode,
    title: string, 
    price: string, 
    period?: string, 
    features: string[], 
    isPopular?: boolean,
    role: string,
    subtext?: string
}> = ({icon, title, price, period, features, isPopular, role, subtext}) => (
    <div className={`relative p-8 rounded-3xl flex flex-col h-full transition-all duration-300 ${isPopular ? 'bg-gray-900/80 backdrop-blur-md border-2 border-brand-blue shadow-[0_0_40px_rgba(37,99,235,0.15)]' : 'bg-brand-dark/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700'}`}>
        {isPopular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap">
                Best Investment
            </div>
        )}
        <div className="mb-8 text-center">
            <div className={`mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${isPopular ? 'bg-brand-blue text-black' : 'bg-gray-800 text-white'}`}>
                {icon}
            </div>
            <p className="text-brand-blue font-bold text-xs uppercase tracking-wider mb-2">{role}</p>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <div className="flex items-baseline justify-center">
                <span className="text-5xl font-extrabold text-white tracking-tight">{price}</span>
                {period && <span className="text-gray-500 ml-1 font-medium">{period}</span>}
            </div>
            {subtext && <p className="text-gray-500 mt-3 text-sm">{subtext}</p>}
        </div>
        
        <ul className="space-y-4 mb-8 flex-1">
            {features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className={`mt-0.5 p-0.5 rounded-full ${isPopular ? 'bg-brand-blue/20' : 'bg-gray-800'}`}>
                        <Check className={`w-3 h-3 ${isPopular ? 'text-brand-blue' : 'text-gray-400'} flex-shrink-0`} />
                    </div>
                    <span className="leading-tight">{feat}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full py-4 rounded-xl font-bold transition-all text-sm tracking-wide ${
            isPopular 
            ? 'bg-brand-blue hover:bg-blue-600 text-black shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]' 
            : 'bg-white text-black hover:bg-gray-200 hover:scale-[1.02] active:scale-[0.98]'
        }`}>
            {isPopular ? 'Start Growing Now' : 'Start Searching'}
        </button>
    </div>
);

export default Pricing;