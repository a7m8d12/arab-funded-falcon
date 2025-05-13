
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-slate-800">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold text-arabfunded-primary">
          Arab Funded
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6 rtl:flex-row-reverse">
          <Link to="/" className="text-white hover:text-arabfunded-primary transition-colors">
            {t('home')}
          </Link>
          <Link to="/pricing" className="text-white hover:text-arabfunded-primary transition-colors">
            {t('pricing')}
          </Link>
          <LanguageToggle />
          <Button variant="outline" size="sm">
            {t('login')}
          </Button>
          <Button className="btn-gradient">
            {t('signup')}
          </Button>
        </nav>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`md:hidden absolute w-full bg-card py-4 shadow-lg ${isRTL ? 'rtl' : 'ltr'}`}>
          <div className="container flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-white hover:text-arabfunded-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link 
              to="/pricing" 
              className="text-white hover:text-arabfunded-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('pricing')}
            </Link>
            <div className="flex justify-between items-center py-2">
              <span className="text-white">{t('language')}</span>
              <LanguageToggle />
            </div>
            <Button variant="outline" size="sm" className="w-full">
              {t('login')}
            </Button>
            <Button className="w-full btn-gradient">
              {t('signup')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
