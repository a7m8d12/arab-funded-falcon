
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const particlesRef = useRef<HTMLDivElement>(null);

  // Create particles effect
  useEffect(() => {
    if (!particlesRef.current) return;
    
    const container = particlesRef.current;
    const particleCount = 50;
    
    // Remove any existing particles
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    
    // Add new particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random properties
      const size = Math.random() * 4 + 1;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const opacity = Math.random() * 0.5 + 0.1;
      const animationDuration = Math.random() * 15 + 5;
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
    <section className={`min-h-screen pt-20 flex flex-col items-center justify-center hero-gradient relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Particles container */}
      <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none"></div>
      
      {/* Background animation elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-arabfunded-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float"></div>
        <div className="absolute w-96 h-96 bg-arabfunded-accent/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-64 h-64 bg-arabfunded-accent/30 rounded-full blur-2xl top-1/3 left-10 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute w-64 h-64 bg-arabfunded-primary/30 rounded-full blur-2xl bottom-1/3 right-10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-2 text-xs uppercase tracking-widest text-arabfunded-primary animate-fade-in inline-flex items-center bg-arabfunded-primary/10 px-3 py-1 rounded-full">
            <Zap size={14} className="mr-1 animate-pulse" />
            {t('hero.innovationTag') || 'Trading Revolution'}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight animate-fade-in text-shimmer">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gray-400 mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {t('hero.cta')}
          </p>
          <Button className="text-lg px-8 py-6 h-auto btn-gradient animate-fade-in glow" style={{ animationDelay: '0.6s' }}>
            {t('hero.button')}
            <ArrowRight className={`ml-2 rtl:rotate-180 ${isRTL ? 'mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
      
      {/* Animated chart illustration */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4 animate-fade-in relative z-10" style={{ animationDelay: '0.8s' }}>
        <div className="w-full h-64 md:h-80 bg-slate-900/50 rounded-xl card-gradient flex items-center justify-center overflow-hidden relative">
          <div className="text-arabfunded-primary text-xl z-10">Trading Chart Visualization</div>
          
          {/* Chart visualization animation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-arabfunded-primary to-transparent relative">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i}
                  className="absolute h-20 w-3 bg-arabfunded-primary/20"
                  style={{
                    left: `${i * 10}%`,
                    bottom: `${Math.sin(i * 0.8) * 20 + 30}px`,
                    height: `${Math.cos(i * 0.8) * 30 + 60}px`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Animated line */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 400">
            <path 
              d="M0,200 Q300,100 600,200 T1200,200" 
              fill="none" 
              stroke="url(#lineGradient)" 
              strokeWidth="3"
              className="animate-pulse"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(155, 135, 245, 0.2)" />
                <stop offset="50%" stopColor="rgba(155, 135, 245, 0.8)" />
                <stop offset="100%" stopColor="rgba(155, 135, 245, 0.2)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
