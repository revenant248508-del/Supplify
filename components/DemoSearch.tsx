import React, { useState } from 'react';
import { Search, Star, ShoppingBag, ArrowRight, Loader2 } from 'lucide-react';
import { generateMockProducts, MockProduct } from '../services/geminiService';

const DemoSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<MockProduct[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    const products = await generateMockProducts(query);
    setResults(products);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-6" id="demo">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Try the <span className="text-brand-blue">Supplify Engine</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience our smart aggregator. Type any item (e.g., "architecture kit", "used textbooks", "gaming mouse") to see how we instantly compare stores, prices, and ratings.
        </p>
      </div>

      {/* Search Bar */}
      <div className="glass-panel rounded-2xl p-2 max-w-2xl mx-auto mb-12 flex items-center shadow-lg shadow-blue-900/20">
        <Search className="text-gray-400 ml-4 w-6 h-6" />
        <form onSubmit={handleSearch} className="flex-1 flex">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for items..."
            className="w-full bg-transparent border-none focus:ring-0 text-white px-4 py-3 placeholder-gray-500 text-lg outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-brand-blue hover:bg-blue-600 text-black font-bold py-2 px-6 rounded-xl transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Search"}
          </button>
        </form>
      </div>

      {/* Results Grid */}
      {results && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
          {results.map((item, idx) => (
            <div key={idx} className="bg-brand-dark border border-gray-800 rounded-xl overflow-hidden hover:border-brand-blue transition-colors group">
              <div className="h-40 bg-gray-900 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/400/300?random=${idx + item.name.length}`} 
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur text-brand-blue text-xs font-bold px-2 py-1 rounded">
                  {item.storeName}
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white leading-tight">{item.name}</h3>
                  <span className="text-brand-blue font-mono font-bold">{item.price}</span>
                </div>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{item.description}</p>
                
                <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-sm font-medium text-white">{item.rating}</span>
                  </div>
                  <button className="text-xs text-brand-blue flex items-center hover:underline">
                    View Item <ArrowRight className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {!results && !loading && (
         <div className="text-center text-gray-600 mt-8">
            <ShoppingBag className="w-12 h-12 mx-auto mb-2 opacity-20" />
            <p>Results will appear here.</p>
         </div>
      )}
    </div>
  );
};

export default DemoSearch;