import React from 'react';
import { Twitter, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white tracking-tighter">
              supplify<span className="text-brand-blue">.</span>
            </h2>
            <p className="text-gray-500 text-sm mt-2">Connecting campus communities.</p>
          </div>
          
          <div className="flex gap-6">
            <SocialIcon icon={<Twitter className="w-5 h-5" />} />
            <SocialIcon icon={<Instagram className="w-5 h-5" />} />
            <SocialIcon icon={<Facebook className="w-5 h-5" />} />
            <SocialIcon icon={<Mail className="w-5 h-5" />} />
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2024 Supplify Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue">Terms of Service</a>
            <a href="#" className="hover:text-brand-blue">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{icon: React.ReactNode}> = ({icon}) => (
    <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-brand-blue hover:text-black transition-all">
        {icon}
    </a>
);

export default Footer;