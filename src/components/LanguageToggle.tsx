
import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Button 
        variant={language === 'en' ? "default" : "outline"} 
        size="sm" 
        onClick={() => setLanguage('en')}
        className="text-sm gap-2"
      >
        EN 🇬🇧
      </Button>
      <Button 
        variant={language === 'ar' ? "default" : "outline"} 
        size="sm" 
        onClick={() => setLanguage('ar')}
        className="text-sm gap-2"
      >
        AR 🇸🇦
      </Button>
    </div>
  );
};

export default LanguageToggle;
