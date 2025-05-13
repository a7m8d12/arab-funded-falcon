
import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="gap-2"
        >
          <Globe size={16} />
          {language === 'en' ? 'EN' : 'AR'}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isRTL ? "end" : "start"} className="bg-card/95 backdrop-blur-sm border-slate-800">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-2 ${language === 'en' ? 'bg-accent/30' : ''}`}
        >
          <span className="mr-2">🇬🇧</span> English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('ar')}
          className={`flex items-center gap-2 ${language === 'ar' ? 'bg-accent/30' : ''}`}
        >
          <span className="mr-2">🇸🇦</span> العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
