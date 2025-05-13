
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import RulesSection from '@/components/RulesSection';
import CTASection from '@/components/CTASection';

const Rules = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [isRTL]);

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <div className="pt-24 pb-10 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">
            {isRTL ? 'القوانين وشروط التداول' : 'Trading Rules & Conditions'}
          </h1>
        </div>
      </div>
      <RulesSection />
      <CTASection />
      <footer className="py-8 bg-background border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Arab Funded. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Rules;
