import React, { useState } from 'react';
import { ShoppingCart, Store, Zap, BarChart3, Star, MapPin, UserCheck, TrendingUp, Search, ArrowRight } from 'lucide-react';

const Features: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'stores'>('students');

  return (
    <section id="features" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The Ecosystem Advantage</h2>
          <p className="text-gray-400">Connecting urgent needs with local supply in the CMU community.</p>
          
          <div className="flex justify-center mt-8">
            <div className="bg-gray-900 p-1 rounded-full inline-flex border border-gray-800">
              <button
                onClick={() => setActiveTab('students')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'students' 
                    ? 'bg-brand-blue text-black shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                For Students
              </button>
              <button
                onClick={() => setActiveTab('stores')}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === 'stores' 
                    ? 'bg-brand-blue text-black shadow-lg shadow-blue-500/25' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                For Local Vendors
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1">
            {activeTab === 'students' ? (
              <div className="animate-fade-in">
                <FeatureItem 
                  icon={<Zap className="w-6 h-6" />}
                  title="Eliminate Academic Friction"
                  desc="No more running between stores during exam week. Find exactly what you need, instantly on your phone."
                />
                <FeatureItem 
                  icon={<MapPin className="w-6 h-6" />}
                  title="Location-Based Access"
                  desc="Locate urgent supplies from nearby sari-sari stores and retailers within the CMU ecosystem."
                />
                <FeatureItem 
                  icon={<Star className="w-6 h-6" />}
                  title="Verified Ratings"
                  desc="Ensure you're buying from reliable sources. See price and quality ratings from fellow students."
                />
              </div>
            ) : (
              <div className="animate-fade-in">
                 <FeatureItem 
                  icon={<TrendingUp className="w-6 h-6" />}
                  title="Guaranteed Targeted Sales"
                  desc="We bring reliable, high-intent traffic directly to you. Students search only when they are ready to buy."
                />
                <FeatureItem 
                  icon={<BarChart3 className="w-6 h-6" />}
                  title="Auto-Statistic Tools"
                  desc="Know exactly what's in demand. Our analytics show you what students are searching for in real-time."
                />
                <FeatureItem 
                  icon={<UserCheck className="w-6 h-6" />}
                  title="Most Recommended Exposure"
                  desc="Gain the 'Verified' badge. High-rated stores get priority listing for faster sales."
                />
              </div>
            )}
          </div>

          {/* Visual / Infographic Side */}
          <div className="order-1 lg:order-2 relative h-[500px] bg-gray-900 rounded-3xl border border-gray-800 p-8 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(30,30,40,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(30,30,40,0.5)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"></div>

            {/* Process Diagram / Infographic */}
            <div className="relative z-10 w-full max-w-sm">
                {activeTab === 'students' ? (
                    <div className="flex flex-col gap-6">
                        {/* Step 1 */}
                        <div className="bg-gray-800/80 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-center gap-4 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="w-10 h-10 bg-blue-500/20 text-blue-400 rounded-lg flex items-center justify-center shrink-0">
                                <Search className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-blue-400 font-bold uppercase">Step 1</p>
                                <p className="text-white font-semibold">Search "Yellow Pad"</p>
                            </div>
                        </div>
                         
                         {/* Connector */}
                        <div className="h-8 w-0.5 bg-gradient-to-b from-gray-700 to-blue-600 mx-auto"></div>

                        {/* Step 2 (Supplify Core) */}
                        <div className="bg-brand-blue p-5 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.3)] flex flex-col items-center text-center animate-in fade-in zoom-in duration-500 delay-100">
                            <p className="text-black font-black text-lg">Supplify Engine</p>
                            <p className="text-black/70 text-sm">Matches location & stock</p>
                        </div>

                        {/* Connector */}
                        <div className="h-8 w-0.5 bg-gradient-to-b from-blue-600 to-gray-700 mx-auto"></div>

                        {/* Step 3 */}
                        <div className="bg-gray-800/80 backdrop-blur border border-gray-700 p-4 rounded-xl flex items-center gap-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500 delay-200">
                            <div className="w-10 h-10 bg-green-500/20 text-green-400 rounded-lg flex items-center justify-center shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-green-400 font-bold uppercase">Result</p>
                                <p className="text-white font-semibold">Available at "Kuya Ben's"</p>
                                <p className="text-xs text-gray-400">150m away • ₱45.00</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {/* Step 1 */}
                        <div className="flex items-center justify-between">
                             <div className="bg-gray-800/80 border border-gray-700 p-3 rounded-lg w-[45%] text-center shadow-lg">
                                <div className="w-8 h-8 bg-blue-900 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-400"><Search className="w-4 h-4"/></div>
                                <p className="text-[10px] text-gray-400">Student A needs</p>
                                <p className="text-xs font-bold text-white">Drafting Pen</p>
                             </div>
                             <div className="bg-gray-800/80 border border-gray-700 p-3 rounded-lg w-[45%] text-center shadow-lg">
                                <div className="w-8 h-8 bg-blue-900 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-400"><Search className="w-4 h-4"/></div>
                                <p className="text-[10px] text-gray-400">Student B needs</p>
                                <p className="text-xs font-bold text-white">Bond Paper</p>
                             </div>
                        </div>

                         {/* Connector */}
                         <div className="flex justify-center -my-2 relative z-0">
                             <div className="w-2/3 border-b-2 border-dashed border-gray-600 h-4 rounded-b-xl"></div>
                         </div>
                         <div className="h-4 w-0.5 bg-gray-600 mx-auto relative z-0"></div>

                         {/* Step 2 (Funnel) */}
                         <div className="bg-gradient-to-b from-brand-blue to-blue-700 p-5 rounded-2xl shadow-xl relative z-10 text-center animate-pulse">
                             <h4 className="font-black text-black text-lg">Supplify Traffic</h4>
                             <p className="text-black/80 text-xs">High-Intent Filtering</p>
                         </div>

                         {/* Connector */}
                         <div className="h-6 w-0.5 bg-blue-700 mx-auto"></div>

                         {/* Step 3 (Store) */}
                         <div className="bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
                             <div className="bg-gray-100 p-2 rounded-lg">
                                 <Store className="w-8 h-8 text-black" />
                             </div>
                             <div className="flex-1">
                                 <p className="text-xs font-bold text-green-600 uppercase">Targeted Sale!</p>
                                 <p className="text-black font-bold text-sm">Customer Arriving</p>
                                 <div className="w-full bg-gray-200 h-1.5 mt-2 rounded-full overflow-hidden">
                                     <div className="bg-green-500 w-[85%] h-full"></div>
                                 </div>
                                 <p className="text-[10px] text-gray-500 mt-1">Demand: High</p>
                             </div>
                         </div>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem: React.FC<{icon: React.ReactNode, title: string, desc: string}> = ({icon, title, desc}) => (
  <div className="flex gap-4 p-6 rounded-2xl hover:bg-gray-900/50 transition-colors border border-transparent hover:border-gray-800 group cursor-default">
    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-900/20 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-black transition-colors shadow-[0_0_15px_rgba(37,99,235,0.1)]">
      {icon}
    </div>
    <div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </div>
);

export default Features;