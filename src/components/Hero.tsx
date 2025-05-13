
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap, ChartCandlestick } from 'lucide-react';

const Hero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const particlesRef = useRef<HTMLDivElement>(null);
  const chartCanvasRef = useRef<HTMLCanvasElement>(null);
  
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

  // Enhanced candlestick chart animation with smoother transitions
  useEffect(() => {
    const canvas = chartCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions to cover the entire container
    const resizeCanvas = () => {
      const parentRect = canvas.parentElement?.getBoundingClientRect();
      if (parentRect) {
        canvas.width = parentRect.width;
        canvas.height = parentRect.height;
      }
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced chart configuration
    const config = {
      candleCount: 40,
      candleWidth: 6,
      candleGap: 3,
      animationSpeed: 0.1, // Slower for smoother animation
      transitionSpeed: 0.03, // Speed for smooth transitions
      colors: {
        up: 'rgba(139, 92, 246, 0.7)',       // Purple for up candles
        down: 'rgba(155, 135, 245, 0.4)',    // Lighter purple for down candles
        wick: 'rgba(226, 232, 240, 0.7)',    // Light color for wicks
        line: 'rgba(155, 135, 245, 0.2)',    // Semi-transparent line color
        background: 'rgba(26, 31, 44, 0.1)'  // Very subtle background
      }
    };

    // Generate initial random data
    let data = Array(config.candleCount).fill(0).map((_, i) => {
      const basePrice = 100 + Math.random() * 50;
      const range = 3 + Math.random() * 10; // Smaller range for more realistic movements
      const open = basePrice - range / 2 + Math.random() * range;
      const close = basePrice - range / 2 + Math.random() * range;
      const high = Math.max(open, close) + Math.random() * range / 2;
      const low = Math.min(open, close) - Math.random() * range / 2;
      
      // Add target values for smooth transitions
      return { 
        open, close, high, low, 
        targetOpen: open,
        targetClose: close,
        targetHigh: high,
        targetLow: low,
        animated: 0 
      };
    });

    // Animation loop with enhanced smoothness
    let animationFrame: number;
    const drawChart = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas with a subtle fade effect
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Chart dimensions
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const totalCandleWidth = config.candleWidth + config.candleGap;
      const chartWidth = config.candleCount * totalCandleWidth;
      const startX = (canvasWidth - chartWidth) / 2;
      const scaleY = canvasHeight * 0.7;
      const offsetY = canvasHeight * 0.15;
      
      // Find min/max for scaling
      let min = Math.min(...data.map(candle => candle.low));
      let max = Math.max(...data.map(candle => candle.high));
      const range = max - min;
      
      // Add buffer
      min -= range * 0.1;
      max += range * 0.1;

      // Draw background grid with subtle fade effect
      ctx.strokeStyle = config.colors.line;
      ctx.lineWidth = 0.5;
      
      // Horizontal grid lines with fade
      for (let i = 0; i <= 4; i++) {
        const y = offsetY + (scaleY * i / 4);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvasWidth, y);
        ctx.stroke();
      }
      
      // Vertical grid lines with fade
      for (let i = 0; i <= config.candleCount; i += 5) {
        const x = startX + i * totalCandleWidth;
        ctx.beginPath();
        ctx.moveTo(x, offsetY);
        ctx.lineTo(x, offsetY + scaleY);
        ctx.stroke();
      }

      // Draw price line with gradient
      ctx.beginPath();
      const gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);
      gradient.addColorStop(0, 'rgba(139, 92, 246, 0.1)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)');
      gradient.addColorStop(1, 'rgba(139, 92, 246, 0.1)');
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      
      data.forEach((candle, i) => {
        const x = startX + i * totalCandleWidth + config.candleWidth / 2;
        const y = offsetY + scaleY - ((candle.close - min) / (max - min) * scaleY);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      });
      
      ctx.stroke();

      // Draw candles with enhanced visual effects
      data.forEach((candle, i) => {
        const x = startX + i * totalCandleWidth;
        const open = offsetY + scaleY - ((candle.open - min) / (max - min) * scaleY);
        const close = offsetY + scaleY - ((candle.close - min) / (max - min) * scaleY);
        const high = offsetY + scaleY - ((candle.high - min) / (max - min) * scaleY);
        const low = offsetY + scaleY - ((candle.low - min) / (max - min) * scaleY);
        
        // Only draw if animation progress is positive
        if (candle.animated > 0) {
          // Draw wick with slight glow effect
          ctx.beginPath();
          ctx.strokeStyle = config.colors.wick;
          ctx.lineWidth = 1;
          ctx.shadowColor = config.colors.wick;
          ctx.shadowBlur = 1;
          ctx.moveTo(x + config.candleWidth / 2, high);
          ctx.lineTo(x + config.candleWidth / 2, low);
          ctx.stroke();
          ctx.shadowBlur = 0;
          
          // Draw body with subtle gradient
          const bodyTop = Math.min(open, close);
          const bodyBottom = Math.max(open, close);
          const bodyHeight = bodyBottom - bodyTop;
          
          const isUp = candle.open < candle.close;
          ctx.fillStyle = isUp ? config.colors.up : config.colors.down;
          
          // Add slight rounded corners for a more modern look
          const radius = Math.min(1, config.candleWidth / 4);
          ctx.beginPath();
          ctx.moveTo(x + radius, bodyTop);
          ctx.lineTo(x + config.candleWidth - radius, bodyTop);
          ctx.quadraticCurveTo(x + config.candleWidth, bodyTop, x + config.candleWidth, bodyTop + radius);
          ctx.lineTo(x + config.candleWidth, bodyBottom - radius);
          ctx.quadraticCurveTo(x + config.candleWidth, bodyBottom, x + config.candleWidth - radius, bodyBottom);
          ctx.lineTo(x + radius, bodyBottom);
          ctx.quadraticCurveTo(x, bodyBottom, x, bodyBottom - radius);
          ctx.lineTo(x, bodyTop + radius);
          ctx.quadraticCurveTo(x, bodyTop, x + radius, bodyTop);
          ctx.fill();
        }
      });
      
      // Smooth transition to target values
      data = data.map(candle => ({
        ...candle,
        open: candle.open + (candle.targetOpen - candle.open) * config.transitionSpeed,
        close: candle.close + (candle.targetClose - candle.close) * config.transitionSpeed,
        high: candle.high + (candle.targetHigh - candle.high) * config.transitionSpeed,
        low: candle.low + (candle.targetLow - candle.low) * config.transitionSpeed,
        animated: Math.min(1, candle.animated + config.animationSpeed)
      }));
      
      // Generate new data occasionally with smoother transitions
      if (Math.random() < 0.01) {
        // Shift all data
        data = data.slice(1);
        
        // Add new candle based on the last one
        const lastCandle = data[data.length - 1];
        const changePercent = (Math.random() - 0.5) * 1.5; // smaller range for more realistic movement
        const newClose = lastCandle.close * (1 + changePercent * 0.01);
        const range = lastCandle.close * 0.005 * (0.5 + Math.random());
        
        const newCandle = {
          open: lastCandle.close,
          close: newClose,
          high: Math.max(lastCandle.close, newClose) + range * Math.random(),
          low: Math.min(lastCandle.close, newClose) - range * Math.random(),
          targetOpen: lastCandle.close,
          targetClose: newClose,
          targetHigh: Math.max(lastCandle.close, newClose) + range * Math.random(),
          targetLow: Math.min(lastCandle.close, newClose) - range * Math.random(),
          animated: 0 // Start animation at 0
        };
        
        data.push(newCandle);
      }

      // Occasionally update existing candles for more dynamic movement
      if (Math.random() < 0.05) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const candle = data[randomIndex];
        const changePercent = (Math.random() - 0.5) * 0.5;
        
        data[randomIndex] = {
          ...candle,
          targetClose: candle.close * (1 + changePercent * 0.01),
          targetHigh: Math.max(candle.high, candle.close * (1 + Math.abs(changePercent) * 0.015)),
          targetLow: Math.min(candle.low, candle.close * (1 - Math.abs(changePercent) * 0.015))
        };
      }

      animationFrame = requestAnimationFrame(drawChart);
    };
    
    drawChart();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
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
          <Button 
            className="text-lg px-8 py-6 h-auto btn-gradient animate-fade-in glow" 
            style={{ animationDelay: '0.6s' }}
            onClick={() => window.location.href = 'https://app.arabfunded.com/auth'}
          >
            {t('hero.button')}
            <ArrowRight className={`ml-2 rtl:rotate-180 ${isRTL ? 'mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
      
      {/* Animated candlestick chart - Now with full width and height */}
      <div className="mt-16 w-full max-w-5xl mx-auto px-4 animate-fade-in relative z-10" style={{ animationDelay: '0.8s' }}>
        <div className="w-full h-64 md:h-80 bg-slate-900/30 rounded-xl card-gradient flex items-center justify-center overflow-hidden relative">
          {/* Full width/height canvas container */}
          <div className="absolute inset-0 w-full h-full">
            <canvas 
              ref={chartCanvasRef}
              className="w-full h-full"
            ></canvas>
          </div>
          
          <div className="flex items-center gap-2 text-arabfunded-primary text-xl z-10">
            <ChartCandlestick size={24} className="animate-pulse" />
            <span>Live Trading Visualization</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
