import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { pricingPlans } from '../data/pricing';

const Services = () => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto px-6 py-20">
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Prestations & Tarifs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Des formules adaptées à tous les besoins et tous les budgets
            </p>
            </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
            <ScrollReveal 
                key={index}
                animation="zoom-in"
                delay={index * 0.15}
            >
                <div
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg transition-all duration-500 border-2 ${
                    plan.highlight
                    ? 'border-cordyceps-500 scale-105 shadow-2xl'
                    : 'border-gray-200 dark:border-gray-700 hover:scale-105 hover:shadow-xl'
                }`}
                >
                {plan.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-2 bg-gradient-to-r from-cordyceps-500 via-cordyceps-600 to-cordyceps-700 text-white rounded-full text-sm font-bold shadow-lg">
                        ⭐ POPULAIRE
                    </span>
                    </div>
                )}
                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {plan.name}
                    </h3>
                    
                    {/* Affichage du prix avec promo si oldPrice existe */}
                    <div className="mb-2">
                        {plan.oldPrice && (
                            <div className="text-lg text-gray-400 dark:text-gray-500 line-through mb-1">
                                {plan.oldPrice}
                            </div>
                        )}
                        <div className={`font-black ${plan.oldPrice ? 'text-5xl text-red-600 dark:text-red-500' : 'text-4xl text-cordyceps-600 dark:text-cordyceps-400'}`}>
                            {plan.price}
                        </div>
                        {plan.oldPrice && (
                            <div className="inline-block mt-2 px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-bold">
                                🔥 Promotion limitée !
                            </div>
                        )}
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {plan.description}
                    </p>
                </div>
                <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                    </li>
                    ))}
                </ul>
                <button
                    onClick={() => navigate('/contact')}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlight
                        ? 'bg-gradient-to-r from-cordyceps-500 via-cordyceps-600 to-cordyceps-700 text-white hover:shadow-lg hover:scale-105'
                        : 'border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900'
                    }`}
                >
                    Choisir cette formule
                </button>
                </div>
            </ScrollReveal>
            ))}
        </div>

        <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="mt-16 bg-cordyceps-50 dark:bg-cordyceps-900/10 rounded-3xl p-8 max-w-4xl mx-auto border-2 border-cordyceps-200 dark:border-cordyceps-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                💡 Besoin d'un devis personnalisé ?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                Chaque projet est unique. Contactez-moi pour une estimation adaptée à vos besoins spécifiques.
            </p>
            <div className="text-center">
                <button
                onClick={() => navigate('/contact')}
                className="px-8 py-3 bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                Demander un devis gratuit
                </button>
            </div>
            </div>
        </ScrollReveal>
        </div>
    );
};

export default Services;