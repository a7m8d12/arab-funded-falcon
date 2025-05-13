
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap } from 'lucide-react';

const CTASection: React.FC = () => {
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
      const opacity = Math.random() * 0.4 + 0.1;
      const animationDuration = Math.random() * 10 + 5;
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
    <section className={`py-20 hero-gradient relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/20 rounded-full blur-3xl -top-48 -right-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/20 rounded-full blur-3xl -bottom-48 -left-48 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-arabfunded-primary/20 rounded-full blur-2xl top-1/4 left-1/3 animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Glowing dots in the background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute bg-arabfunded-primary rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 4}px`,
              height: `${Math.random() * 6 + 4}px`,
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center card-gradient p-8 rounded-2xl">
          <div className="inline-flex items-center bg-arabfunded-primary/20 px-3 py-1 rounded-full mb-4">
            <Zap size={16} className="mr-2 text-arabfunded-primary animate-pulse" />
            <span className="text-sm text-arabfunded-primary">
              {t('cta.badgeText') || 'Start Trading Now'}
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white text-shimmer">
            {t('cta.title')}
          </h2>
          
          <p className="text-xl text-gray-300 mb-8">
            {t('cta.subtitle')}
          </p>
          
          <Button className="text-lg px-8 py-6 h-auto btn-gradient glow">
            {t('cta.button')}
            <ArrowRight className={`ml-2 rtl:rotate-180 ${isRTL ? 'mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
