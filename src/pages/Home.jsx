import React from 'react';
import { ArrowRight, Rocket } from 'lucide-react';
import ServiceCard from '../components/home/ServiceCard';
import ScrollReveal from '../components/ui/ScrollReveal';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 dark:from-purple-900 dark:via-blue-900 dark:to-cyan-900 opacity-10"></div>
            <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            
            <div className="container mx-auto px-6 relative z-10">
            <div className="text-center space-y-8">
                {/* Logo centré au-dessus */}
                <ScrollReveal animation="zoom-in" duration={0.8}>
                <div className="flex justify-center mb-6">
                    <img 
                    src="/logo.png" 
                    alt="Cordyceps Création Logo" 
                    className="h-24 w-auto md:h-32 lg:h-40 object-contain"
                    />
                </div>
                </ScrollReveal>
                
                {/* Titre en dessous */}
                <ScrollReveal animation="fade-up" delay={0.2}>
                <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-cordyceps-600 via-cordyceps-700 to-cordyceps-800 dark:from-cordyceps-400 dark:via-cordyceps-600 dark:to-cordyceps-800 bg-clip-text text-transparent animate-gradient">
                    Cordyceps Création
                </h1>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={0.4}>
                <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light max-w-3xl mx-auto">
                    Développement web sur-mesure pour transformer vos idées en expériences digitales uniques
                </p>
                </ScrollReveal>
                
                <ScrollReveal animation="fade-up" delay={0.6}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                    onClick={() => navigate('/contact')}
                    className="px-8 py-4 bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                    Démarrer un projet <ArrowRight className="w-5 h-5" />
                    </button>
                    <button
                    onClick={() => navigate('/realisations')}
                    className="px-8 py-4 border-2 border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-300"
                    >
                    Voir mes réalisations
                    </button>
                </div>
                </ScrollReveal>
            </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="container mx-auto px-6">
            <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Ce que je peux créer pour vous
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Des solutions web complètes et performantes, adaptées à vos besoins
                </p>
            </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <ScrollReveal 
                key={index} 
                animation="fade-up" 
                delay={index * 0.1}
                >
                <ServiceCard service={service} />
                </ScrollReveal>
            ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6">
            <ScrollReveal animation="zoom-in">
            <div className="bg-gradient-to-r from-cordyceps-500 via-cordyceps-600 to-cordyceps-700 rounded-3xl p-12 text-center text-white">
                <Rocket className="w-16 h-16 mx-auto mb-6 animate-bounce" />
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Prêt à lancer votre projet ?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Discutons ensemble de votre vision et transformons-la en réalité digitale
                </p>
                <button
                onClick={() => navigate('/contact')}
                className="px-10 py-5 bg-white text-cordyceps-600 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                Contactez-moi maintenant
                </button>
            </div>
            </ScrollReveal>
        </section>
        </div>
    );
};

export default Home;