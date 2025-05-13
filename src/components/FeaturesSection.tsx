
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Zap, Clock, Award, BarChart4, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'features.noEvaluation',
    icon: Check,
  },
  {
    id: 2,
    title: 'features.biweeklyPayouts',
    icon: Clock,
  },
  {
    id: 3,
    title: 'features.instantDelivery',
    icon: Zap,
  },
  {
    id: 4,
    title: 'features.certificate',
    icon: Award,
  },
  {
    id: 5,
    title: 'features.realAccount',
    icon: BarChart4,
  },
  {
    id: 6,
    title: 'features.broker',
    icon: Shield,
  },
];

const FeaturesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`py-20 bg-slate-900/50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-arabfunded-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.id} className="card-gradient p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-arabfunded-primary/20 flex items-center justify-center mb-6">
                  <IconComponent size={24} className="text-arabfunded-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t(feature.title).split('–')[0]}
                </h3>
                {t(feature.title).includes('–') && (
                  <p className="text-gray-400">
                    {t(feature.title).split('–')[1]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
