
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`py-20 hero-gradient relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/20 rounded-full blur-3xl -top-48 -right-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/20 rounded-full blur-3xl -bottom-48 -left-48 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.subtitle')}
          </p>
          <Button className="text-lg px-8 py-6 h-auto btn-gradient">
            {t('cta.button')}
            <ArrowRight className={`ml-2 rtl:rotate-180 ${isRTL ? 'mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
