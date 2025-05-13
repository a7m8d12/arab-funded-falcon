
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';

const RulesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const rules = [
    'rules.dailyDrawdown',
    'rules.maxDrawdown',
    'rules.payouts',
    'rules.noEvaluation',
    'rules.noTimeLimit',
    'rules.newsTrading',
    'rules.overnight',
    'rules.refunds',
    'rules.termination',
    'rules.ethical'
  ];

  return (
    <section className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('rules.title')}
          </h2>
          <div className="w-24 h-1 bg-arabfunded-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto card-gradient rounded-xl p-8">
          <ul className="space-y-4">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start">
                <Check className="text-arabfunded-primary mt-1 flex-shrink-0" size={20} />
                <span className="ml-3 rtl:mr-3 rtl:ml-0 text-gray-300">{t(rule)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
