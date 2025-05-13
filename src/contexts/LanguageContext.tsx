
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Header
    'home': 'Home',
    'pricing': 'Pricing',
    'signup': 'Sign Up',
    'login': 'Login',
    
    // Hero
    'hero.title': 'Get a funded trading account instantly',
    'hero.subtitle': 'Keep up to 85% profit – No evaluation – Just trade',
    'hero.cta': 'Start your trading journey with Arab Funded today.',
    'hero.button': 'Get Funded Now',
    
    // Pricing
    'pricing.title': 'Instant Funded Accounts',
    'pricing.accountSize': 'Account Size',
    'pricing.price': 'Price',
    'pricing.profitSplit': 'Profit Split',
    'pricing.payout': 'Payout',
    'pricing.dailyLoss': 'Daily Loss',
    'pricing.maxLoss': 'Max Loss',
    'pricing.upTo': 'Up to',
    'pricing.biweekly': 'Bi-weekly',
    'pricing.button': 'Select Account',
    
    // Features
    'features.title': 'Why Choose Arab Funded',
    'features.noEvaluation': 'No Evaluation – Start trading immediately',
    'features.biweeklyPayouts': 'Bi-weekly payouts',
    'features.instantDelivery': 'Instant account delivery',
    'features.certificate': 'Certificate of funding',
    'features.realAccount': 'Real MT4/MT5 account',
    'features.broker': 'Partnered with top-tier broker',
    
    // CTA
    'cta.title': 'Ready to start your trading journey?',
    'cta.subtitle': 'Sign up now and get funded instantly.',
    'cta.button': 'Get Funded',
    
    // Rules
    'rules.title': 'Trading Rules for Instant Funded Accounts',
    'rules.dailyDrawdown': 'Daily Drawdown: Max 5% of the starting balance.',
    'rules.maxDrawdown': 'Max Overall Drawdown: 10% absolute from initial balance.',
    'rules.payouts': 'Payouts: Every 2 weeks (bi-weekly).',
    'rules.noEvaluation': 'No evaluation required: Start trading immediately.',
    'rules.noTimeLimit': 'No time limit for trading.',
    'rules.newsTrading': 'News trading is allowed.',
    'rules.overnight': 'Holding overnight and weekends is allowed.',
    'rules.refunds': 'Refunds are not available once account is delivered.',
    'rules.termination': 'Breaking any rule will result in account termination.',
    'rules.ethical': 'All trades must follow standard risk and ethical guidelines.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'Do I have to pass a challenge to get funded?',
    'faq.a1': 'No! Arab Funded offers instant funded accounts with no challenge required.',
    'faq.q2': 'When can I withdraw my profits?',
    'faq.a2': 'Every 2 weeks (bi-weekly), after account review and approval.',
    'faq.q3': 'What happens if I hit the drawdown limits?',
    'faq.a3': 'The account will be terminated if you exceed the 5% daily or 10% overall loss.',
    'faq.q4': 'Can I trade during news or hold overnight?',
    'faq.a4': 'Yes, both are allowed.',
    'faq.q5': 'Will I receive a certificate of funding?',
    'faq.a5': 'Yes, after account activation, you\'ll receive an official funding certificate.',
    'faq.q6': 'Are refunds available?',
    'faq.a6': 'No, due to the nature of instant delivery, all sales are final.'
  },
  ar: {
    // Header
    'home': 'الرئيسية',
    'pricing': 'الأسعار',
    'signup': 'التسجيل',
    'login': 'تسجيل الدخول',
    
    // Hero
    'hero.title': 'احصل على حساب تداول ممول فورًا',
    'hero.subtitle': 'اربح حتى 85% من الأرباح – بدون تقييم – فقط تداول',
    'hero.cta': 'ابدأ رحلتك مع Arab Funded اليوم.',
    'hero.button': 'ابدأ الآن',
    
    // Pricing
    'pricing.title': 'حسابات ممولة فورية',
    'pricing.accountSize': 'حجم الحساب',
    'pricing.price': 'السعر',
    'pricing.profitSplit': 'نسبة الربح',
    'pricing.payout': 'السحب',
    'pricing.dailyLoss': 'الخسارة اليومية',
    'pricing.maxLoss': 'الخسارة الكلية',
    'pricing.upTo': 'حتى',
    'pricing.biweekly': 'كل أسبوعين',
    'pricing.button': 'اختر الحساب',
    
    // Features
    'features.title': 'لماذا تختار Arab Funded',
    'features.noEvaluation': 'بدون تقييم – ابدأ التداول فورًا',
    'features.biweeklyPayouts': 'سحب أرباح كل أسبوعين',
    'features.instantDelivery': 'تسليم فوري للحساب',
    'features.certificate': 'شهادة تمويل رسمية',
    'features.realAccount': 'حساب حقيقي على MT4 أو MT5',
    'features.broker': 'شراكة مع بروكر عالمي مرموق',
    
    // CTA
    'cta.title': 'مستعد تبدأ رحلتك في التداول؟',
    'cta.subtitle': 'سجّل الآن واحصل على حسابك الممول فورًا.',
    'cta.button': 'احصل على حسابك',
    
    // Rules
    'rules.title': 'قوانين التداول للحسابات الممولة الفورية',
    'rules.dailyDrawdown': 'الحد الأقصى للخسارة اليومية: 5% من رصيد الحساب.',
    'rules.maxDrawdown': 'الحد الأقصى للخسارة الكلية: 10% من الرصيد الأصلي.',
    'rules.payouts': 'السحب: كل أسبوعين.',
    'rules.noEvaluation': 'بدون تقييم: تبدأ التداول فورًا بعد شراء الحساب.',
    'rules.noTimeLimit': 'لا يوجد حد زمني لإنهاء التداول.',
    'rules.newsTrading': 'يسمح بالتداول وقت الأخبار.',
    'rules.overnight': 'يسمح بحمل الصفقات لليوم التالي وعطلة نهاية الأسبوع.',
    'rules.refunds': 'لا يمكن استرجاع الأموال بعد تسليم الحساب.',
    'rules.termination': 'مخالفة أي شرط يؤدي إلى سحب الحساب مباشرة.',
    'rules.ethical': 'يجب الالتزام بقواعد المخاطرة والتداول الأخلاقي.',
    
    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'هل يجب اجتياز تحدي للحصول على حساب؟',
    'faq.a1': 'لا، Arab Funded تقدم حسابات ممولة فورية بدون أي تقييم.',
    'faq.q2': 'متى يمكنني سحب الأرباح؟',
    'faq.a2': 'بعد أسبوعين من التداول، بعد مراجعة الحساب والموافقة.',
    'faq.q3': 'ماذا يحدث إذا تجاوزت حدود الخسارة؟',
    'faq.a3': 'يتم سحب الحساب تلقائيًا عند تجاوز 5% خسارة يومية أو 10% إجمالية.',
    'faq.q4': 'هل يمكنني التداول أثناء الأخبار أو ترك الصفقات مفتوحة؟',
    'faq.a4': 'نعم، كلاهما مسموح به.',
    'faq.q5': 'هل سأحصل على شهادة تمويل؟',
    'faq.a5': 'نعم، ستحصل على شهادة رسمية بعد تفعيل الحساب.',
    'faq.q6': 'هل يمكنني استرجاع المبلغ؟',
    'faq.a6': 'لا، جميع الطلبات نهائية بعد تسليم الحساب.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL: language === 'ar',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
