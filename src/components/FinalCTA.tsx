import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-r from-arbitrum-600 via-arbitrum-800 to-arbitrum-900">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">
            {t('finalCta.title')}{' '}
            <span className="text-teal-400">{t('finalCta.titleHighlight')}</span>
          </h2>

          <p className="text-xl text-arbitrum-200 mb-8 max-w-2xl mx-auto">
            {t('finalCta.subtitle')}
          </p>

          <a
            href="https://app.arbitrum.ac"
            className="inline-flex items-center px-10 py-5 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            {t('finalCta.button')}
            <ArrowRight className="ml-3 w-6 h-6" />
          </a>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6 text-arbitrum-200">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {t('finalCta.freeAccount')}
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {t('finalCta.gasSponsorship')}
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {t('finalCta.quickSetup')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
