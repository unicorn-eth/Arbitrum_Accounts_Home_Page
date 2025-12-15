import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/arbitrum.svg"
              alt={t('common.arbitrumLogo')}
              className="w-10 h-10"
            />
            <span className="text-xl font-semibold text-gray-900">{t('common.arbitrumAccounts')}</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-arbitrum-400 transition-colors">{t('nav.features')}</a>
            <a href="#security" className="text-gray-600 hover:text-arbitrum-400 transition-colors">{t('nav.security')}</a>
            <a href="#faq" className="text-gray-600 hover:text-arbitrum-400 transition-colors">{t('nav.faq')}</a>
            <LanguageSelector />
          </nav>

          <div className="md:hidden">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
