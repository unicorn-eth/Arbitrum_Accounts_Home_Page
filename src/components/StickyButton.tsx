import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const StickyButton = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
      <a
        href="https://app.arbitrum.ac"
        className="inline-flex items-center px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
      >
        {t('stickyButton.text')}
        <ArrowRight className="ml-2 w-4 h-4" />
      </a>
    </div>
  );
};

export default StickyButton;
