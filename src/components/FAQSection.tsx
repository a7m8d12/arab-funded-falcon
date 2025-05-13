
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection: React.FC = () => {
  const { t, isRTL } = useLanguage();
  
  const faqs = [
    { question: 'faq.q1', answer: 'faq.a1' },
    { question: 'faq.q2', answer: 'faq.a2' },
    { question: 'faq.q3', answer: 'faq.a3' },
    { question: 'faq.q4', answer: 'faq.a4' },
    { question: 'faq.q5', answer: 'faq.a5' },
    { question: 'faq.q6', answer: 'faq.a6' },
  ];

  return (
    <section className={`py-20 bg-slate-900/50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t('faq.title')}
          </h2>
          <div className="w-24 h-1 bg-arabfunded-primary mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`item-${index}`}
                className="card-gradient rounded-xl overflow-hidden border-0"
              >
                <AccordionTrigger className="px-6 py-4 text-white hover:text-arabfunded-primary hover:no-underline">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
