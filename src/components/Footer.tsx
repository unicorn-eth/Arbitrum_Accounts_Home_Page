import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-r from-arbitrum-600 to-arbitrum-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 p-2">
              <img
                src="/arbitrum.svg"
                alt={t('common.arbitrumLogo')}
                className="w-12 h-12"
              />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              {t('footer.headline')}
            </h2>
            <p className="text-xl text-arbitrum-200 mb-8 max-w-2xl mx-auto">
              {t('footer.subtitle')}
            </p>
          </div>

          <a
            href="https://app.arbitrum.ac"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-arbitrum-600 font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {t('common.startNow')}
          </a>

          <div className="mt-12 pt-8 border-t border-arbitrum-500 border-opacity-30">
            <div className="flex flex-col md:flex-row justify-between items-center text-arbitrum-200 text-sm">
              <div className="flex items-center mb-4 md:mb-0">
                <span>{t('footer.copyright')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
