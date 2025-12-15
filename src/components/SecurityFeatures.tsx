import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, CheckCircle } from 'lucide-react';

const SecurityFeatures = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      titleKey: 'security.feature1Title',
      descriptionKey: 'security.feature1Description'
    },
    {
      icon: CheckCircle,
      titleKey: 'security.feature2Title',
      descriptionKey: 'security.feature2Description'
    }
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-br from-gray-50 to-arbitrum-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('security.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('security.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-arbitrum-200 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-arbitrum-400 to-arbitrum-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {t(feature.titleKey)}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {t(feature.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
