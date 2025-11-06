import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { portfolio } from '../data/portfolio';

const Portfolio = () => {
    return (
        <div className="container mx-auto px-6 py-20">
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Mes Réalisations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Découvrez quelques projets que j'ai eu le plaisir de développer
            </p>
            </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((project, index) => (
            <ScrollReveal 
                key={index}
                animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                delay={index * 0.15}
            >
                <div className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                    <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white/90 dark:bg-gray-900/90 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                        {project.category}
                    </span>
                    </div>
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                    </p>
                    <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cordyceps-600 dark:text-cordyceps-400 font-semibold hover:gap-4 transition-all duration-300"
                    >
                    Voir le projet <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
                </div>
            </ScrollReveal>
            ))}
        </div>
        </div>
    );
};

export default Portfolio;