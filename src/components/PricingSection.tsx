
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const pricingData = [
  { accountSize: 6000, price: 59, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 15000, price: 119, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 25000, price: 199, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 50000, price: 299, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 100000, price: 549, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
  { accountSize: 200000, price: 999, profitSplit: 85, payout: 'biweekly', dailyLoss: 5, maxLoss: 10 },
];

const PricingSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section id="pricing" className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('pricing.title')}
          </h2>
          <div className="w-24 h-1 bg-arabfunded-primary mx-auto"></div>
        </div>

        {/* Mobile pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:hidden">
          {pricingData.map((plan, index) => (
            <div key={index} className="pricing-card">
              {index === 2 && <div className="highlight"><span className="transform -rotate-45 text-white text-xs">Popular</span></div>}
              <div className="text-center mb-6">
                <p className="text-gray-400 mb-2">{t('pricing.accountSize')}</p>
                <h3 className="text-3xl font-bold text-white">${plan.accountSize.toLocaleString()}</h3>
              </div>
              <div className="text-center mb-6">
                <p className="text-gray-400 mb-2">{t('pricing.price')}</p>
                <h4 className="text-2xl font-bold text-arabfunded-primary">${plan.price}</h4>
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
              <Button className="w-full btn-gradient">
                {t('pricing.button')}
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop pricing table */}
        <div className="hidden md:block overflow-x-auto">
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
                <tr key={index} className={index % 2 === 0 ? 'bg-slate-900/30' : ''}>
                  <td className="font-medium text-white">${plan.accountSize.toLocaleString()}</td>
                  <td className="font-medium text-arabfunded-primary">${plan.price}</td>
                  <td>{t('pricing.upTo')} {plan.profitSplit}%</td>
                  <td>{t('pricing.biweekly')}</td>
                  <td>{plan.dailyLoss}%</td>
                  <td>{plan.maxLoss}%</td>
                  <td>
                    <Button size="sm" className="btn-gradient">
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
