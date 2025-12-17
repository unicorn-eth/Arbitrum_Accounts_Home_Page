import React from 'react';

const ProofAndTrust = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Trusted by builders and backed by industry leaders
          </h2>

          <div className="max-w-3xl mx-auto mb-8">
            <blockquote className="text-lg text-gray-700 italic">
              "Unicorn.eth makes onboarding and ticketing for ETHDenver seamless.
              Attendees receive personalized access and easy ticketing - while being introduced to Web3 in a safe, intuitive way. Lines never exceeded 10 minutes. A true game changer for us."
            </blockquote>
            <cite className="text-sm text-gray-500 mt-2 block">
              — Chief Executive Steward of ETHDenver
            </cite>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-arbitrum-400 to-arbitrum-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-gray-700 font-semibold">Arbitrum</span>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-gray-700 font-semibold">thirdweb</span>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="text-gray-700 font-semibold">ENS</span>
          </div>

          <div className="flex items-center">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">🦄</span>
            </div>
            <span className="text-gray-700 font-medium text-sm">unicorn.eth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofAndTrust;
