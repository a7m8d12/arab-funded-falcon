
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';

const FAQ = () => {
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
            {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
        </div>
      </div>
      <FAQSection />
      <CTASection />
      <footer className="py-8 bg-background border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© 2025 Arab Funded. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FAQ;
