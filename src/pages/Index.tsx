
import React, { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PricingSection from '@/components/PricingSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import RulesSection from '@/components/RulesSection';
import FAQSection from '@/components/FAQSection';

const Index = () => {
  const { isRTL } = useLanguage();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Update all CTA buttons to redirect to Arab Funded auth
    const updateCTAButtons = () => {
      const ctaButtons = document.querySelectorAll('.cta-button');
      ctaButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          window.location.href = 'https://app.arabfunded.com/auth';
        });
      });
    };
    
    // Run once on mount and then again after a short delay to ensure all elements are loaded
    updateCTAButtons();
    const timeoutId = setTimeout(updateCTAButtons, 1000);
    
    return () => clearTimeout(timeoutId);
  }, [isRTL]);

  return (
    <div className={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <Hero />
      <PricingSection />
      <FeaturesSection />
      <RulesSection />
      <FAQSection />
      <CTASection />
      <footer className="py-8 bg-background border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Arab Funded. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
