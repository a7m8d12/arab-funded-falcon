
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Zap } from 'lucide-react';

const pricingData = [
  { accountSize: 6000, price: 59, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 15000, price: 119, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 25000, price: 199, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10, popular: true },
  { accountSize: 50000, price: 299, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 100000, price: 549, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 200000, price: 999, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
];

const PricingSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create particle effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 30;
    
    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Add new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 3 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.3 + 0.1;
      const animationDuration = Math.random() * 15 + 10;
      const animationDelay = Math.random() * 5;
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = `${opacity}`;
      particle.style.animation = `pulse ${animationDuration}s infinite`;
      particle.style.animationDelay = `${animationDelay}s`;
      
      container.appendChild(particle);
    }
  }, []);

  return (
    <section id="pricing" className={`py-20 bg-background relative ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/5 rounded-full blur-3xl top-1/4 left-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/5 rounded-full blur-3xl bottom-1/4 right-1/4 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-arabfunded-primary/20 px-3 py-1 rounded-full mb-4">
            <Zap size={16} className="mr-2 text-arabfunded-primary animate-pulse" />
            <span className="text-sm text-arabfunded-primary">
              {t('pricing.badgeText') || 'No Evaluation Needed'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shimmer">
            {t('pricing.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-arabfunded-primary to-arabfunded-accent mx-auto"></div>
        </div>

        {/* Mobile pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:hidden">
          {pricingData.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.popular ? 'ring-2 ring-arabfunded-primary/50 transform scale-[1.02]' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && <div className="highlight"><span className="transform -rotate-45 text-white text-xs">Popular</span></div>}
              <div className="text-center mb-6">
                <p className="text-gray-400 mb-2">{t('pricing.accountSize')}</p>
                <h3 className="text-3xl font-bold text-white">${plan.accountSize.toLocaleString()}</h3>
              </div>
              <div className="text-center mb-6">
                <p className="text-gray-400 mb-2">{t('pricing.price')}</p>
                <h4 className="text-2xl font-bold text-shimmer">${plan.price}</h4>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <Check size={18} className="text-arabfunded-primary flex-shrink-0" />
                  <span className="ml-2 rtl:mr-2 rtl:ml-0 text-sm text-gray-300">
                    {t('pricing.profitSplit')}: {t('pricing.upTo')} {plan.profitSplit}%
                  </span>
                </div>
                <div className="flex items-center">
                  <Check size={18} className="text-arabfunded-primary flex-shrink-0" />
                  <span className="ml-2 rtl:mr-2 rtl:ml-0 text-sm text-gray-300">
                    {t('pricing.payout')}: {t('pricing.biweekly')}
                  </span>
                </div>
                <div className="flex items-center">
                  <Check size={18} className="text-arabfunded-primary flex-shrink-0" />
                  <span className="ml-2 rtl:mr-2 rtl:ml-0 text-sm text-gray-300">
                    {t('pricing.dailyLoss')}: {plan.dailyLoss}%
                  </span>
                </div>
                <div className="flex items-center">
                  <Check size={18} className="text-arabfunded-primary flex-shrink-0" />
                  <span className="ml-2 rtl:mr-2 rtl:ml-0 text-sm text-gray-300">
                    {t('pricing.maxLoss')}: {plan.maxLoss}%
                  </span>
                </div>
              </div>
              <Button className="w-full btn-gradient glow">
                {t('pricing.button')}
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop pricing table */}
        <div className="hidden md:block overflow-x-auto card-gradient rounded-xl p-4">
          <table className="w-full table-pricing min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left rtl:text-right">{t('pricing.accountSize')}</th>
                <th className="text-left rtl:text-right">{t('pricing.price')}</th>
                <th className="text-left rtl:text-right">{t('pricing.profitSplit')}</th>
                <th className="text-left rtl:text-right">{t('pricing.payout')}</th>
                <th className="text-left rtl:text-right">{t('pricing.dailyLoss')}</th>
                <th className="text-left rtl:text-right">{t('pricing.maxLoss')}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((plan, index) => (
                <tr 
                  key={index} 
                  className={`
                    transition-all duration-300 hover:bg-slate-800/30
                    ${index % 2 === 0 ? 'bg-slate-900/30' : ''}
                    ${plan.popular ? 'bg-arabfunded-primary/10 relative overflow-hidden' : ''}
                  `}
                >
                  <td className="font-medium text-white">
                    {plan.popular && (
                      <span className="absolute top-0 left-0 bg-arabfunded-primary text-xs px-2 py-1 rounded-br-md">
                        Popular
                      </span>
                    )}
                    <div className={plan.popular ? 'mt-4' : ''}>
                      ${plan.accountSize.toLocaleString()}
                    </div>
                  </td>
                  <td className="font-medium text-arabfunded-primary">${plan.price}</td>
                  <td>{t('pricing.upTo')} {plan.profitSplit}%</td>
                  <td>{t('pricing.biweekly')}</td>
                  <td>{plan.dailyLoss}%</td>
                  <td>{plan.maxLoss}%</td>
                  <td>
                    <Button 
                      size="sm" 
                      className={`btn-gradient ${plan.popular ? 'glow' : ''}`}
                    >
                      {t('pricing.button')}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
