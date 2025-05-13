
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Zap, Clock, Award, BarChart4, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'features.noEvaluation',
    icon: Check,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 2,
    title: 'features.biweeklyPayouts',
    icon: Clock,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 3,
    title: 'features.instantDelivery',
    icon: Zap,
    color: 'from-yellow-500 to-amber-500'
  },
  {
    id: 4,
    title: 'features.certificate',
    icon: Award,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 5,
    title: 'features.realAccount',
    icon: BarChart4,
    color: 'from-teal-500 to-emerald-500'
  },
  {
    id: 6,
    title: 'features.broker',
    icon: Shield,
    color: 'from-purple-500 to-blue-500'
  },
];

const FeaturesSection: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className={`py-20 bg-slate-900/50 relative ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/5 rounded-full blur-3xl top-1/4 right-1/4 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/5 rounded-full blur-3xl bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-arabfunded-primary/20 px-3 py-1 rounded-full mb-4">
            <Zap size={16} className="mr-2 text-arabfunded-primary animate-pulse" />
            <span className="text-sm text-arabfunded-primary">
              {t('features.badgeText') || 'Exclusive Benefits'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shimmer">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-arabfunded-primary to-arabfunded-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.id} 
                className="card-gradient p-6 rounded-xl hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 animate-pulse`} style={{ animationDuration: `${3 + index}s` }}>
                  <IconComponent size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t(feature.title).split('–')[0]}
                </h3>
                {t(feature.title).includes('–') && (
                  <p className="text-gray-400">
                    {t(feature.title).split('–')[1]}
                  </p>
                )}
                
                {/* Decorative element */}
                <div className="absolute bottom-3 right-3 opacity-10">
                  <IconComponent size={40} className="text-white" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
