// src/components/Hero.tsx
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { analytics } from '../utils/analytics';

const Hero = () => {
  const { t } = useTranslation();

  useEffect(() => {
    // Initialize tracking
    analytics.trackScrollDepth();
    analytics.trackTimeOnPage();
  }, []);

  const handleCTAClick = (location: string) => {
    analytics.trackCTAClick(location);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-arbitrum-50 via-white to-arbitrum-50">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-arbitrum-400 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-arbitrum-300 rotate-12"></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 border-2 border-arbitrum-200 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border-2 border-arbitrum-400 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/arbitrum.svg"
              alt={t('common.arbitrumLogo')}
              className="w-20 h-20 mx-auto mb-6"
            />
          </div>

          <h1 className="text-3xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t('hero.title')}{' '}
            <span className="bg-gradient-to-r from-arbitrum-400 to-arbitrum-500 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>{' '}
            {t('hero.titleEnd')}
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')} <br />
            {t('hero.description')}
          </p>

          <div className="flex flex-col items-center gap-3 mb-8">
            <a
              href={analytics.getAppURL('arbitrum.ac')}
              onClick={() => handleCTAClick('hero_primary')}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-arbitrum-400 to-arbitrum-500 hover:from-arbitrum-500 hover:to-arbitrum-600 text-white font-semibold rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t('common.startNow')}
            </a>
<!-- Hide Claim Display for now -->

          </div>

          {/* Visual representation of the app */}
          <div className="relative max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="/arbitrum.svg"
                  alt={t('common.arbitrumLogo')}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('hero.appTitle')}</h3>
              <p className="text-sm text-gray-500 mb-4">{t('hero.appSubtitle')}</p>
              <div className="bg-arbitrum-50 rounded-lg p-3 text-center">
                <span className="text-arbitrum-400 font-mono text-sm">{t('hero.domainExample')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
