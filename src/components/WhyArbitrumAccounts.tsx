import React from 'react';
import { Shield, Zap, DollarSign, Package } from 'lucide-react';

const WhyArbitrumAccounts = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safety first',
      description: 'Curated login flow prevents phishing & wrong-chain errors',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Zap,
      title: 'Blazing fast',
      description: 'Powered by Arbitrum for near-instant transactions',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: DollarSign,
      title: 'Zero cost today',
      description: 'Free account creation & gas sponsorship during launch',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'All in one place',
      description: 'Tokens, NFTs, on-chain actions via one dashboard',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Why Arbitrum Accounts?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for the next generation of web3 users who value safety without sacrificing user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-arbitrum-200 h-full">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-arbitrum-50 to-teal-100 rounded-full text-arbitrum-600 font-medium">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
            Bank-grade security without the bank
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyArbitrumAccounts;
