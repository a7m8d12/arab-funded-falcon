
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`min-h-screen pt-20 flex flex-col items-center justify-center hero-gradient relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.cta')}
          </p>
          <Button className="text-lg px-8 py-6 h-auto btn-gradient animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {t('hero.button')}
            <ArrowRight className={`ml-2 rtl:rotate-180 ${isRTL ? 'mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
      
      {/* Animated illustration or chart */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <div className="w-full h-64 md:h-80 bg-slate-900/50 rounded-xl card-gradient flex items-center justify-center">
          <div className="text-arabfunded-primary text-xl">Trading Chart Visualization</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
