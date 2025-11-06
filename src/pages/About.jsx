import React from 'react';
import { CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const About = () => {
    return (
        <div className="container mx-auto px-6 py-20">
        <ScrollReveal animation="fade-down">
            <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                À Propos
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Passionné par le développement web et l'innovation digitale
            </p>
            </div>
        </ScrollReveal>

        <ScrollReveal animation="zoom-in" duration={0.8}>
        <div className="flex justify-center mb-6">
            <img 
            src="/Photo CV retouchée.png" 
            alt="Ma photo de profil" 
            className="h-80 w-auto md:h-80 lg:h-80 object-contain"
            />
        </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-12">
            <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Qui suis-je ?
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                    Je suis un développeur web passionné, spécialisé dans la création de solutions numériques performantes et intuitives. Mon approche est guidée par le souci du détail et l'envie de donner vie à des projets en ligne.
                </p>
                <p>
                    Quand je ne suis pas plongé dans le code, je recharge mes batteries en pleine nature : la randonnée m'apporte l'inspiration et l'équilibre. Mes fidèles compagnons à quatre pattes et la découverte musicale enrichissent également mon quotidien. Cette énergie se répercute dans mon travail, où je m'efforce de créer des expériences utilisateur aussi fluides et harmonieuses que mes escapades en montagne.
                </p>
                </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Mon objectif
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                    Mon objectif est simple : <strong>transformer vos idées en expériences digitales exceptionnelles</strong> qui captivent vos utilisateurs et font grandir votre activité.
                </p>
                <p>
                    Que vous soyez une startup ambitieuse, une PME en pleine croissance ou un indépendant souhaitant marquer les esprits, je mets mon expertise à votre service pour créer des solutions web qui vous ressemblent.
                </p>
                </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="zoom-in" delay={0.2}>
            <div className="bg-gradient-to-br from-cordyceps-500 via-cordyceps-600 to-cordyceps-700 rounded-3xl p-8 text-white shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Mon Parcours</h3>
                <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        1
                    </div>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Formation & Autodidacte</h4>
                    <p className="opacity-90">
                        Développeur web & web mobile diplomé en 2025, autodidacte passionné, en constante formation sur les dernières technologies web (React, Vue.js, Symfony, etc...)
                    </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        2
                    </div>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Premiers Projets</h4>
                    <p className="opacity-90">
                        Réalisation de projets pour des clients locaux, construction d'un portfolio varié (sites vitrines, e-commerce, applications web)
                    </p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        3
                    </div>
                    </div>
                    <div>
                    <h4 className="text-xl font-bold mb-2">Aujourd'hui</h4>
                    <p className="opacity-90">
                        Création de Cordyceps Création pour accompagner les entreprises et les particuliers dans leur transformation digitale avec des solutions innovantes
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Compétences Techniques
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-cordyceps-600 dark:text-cordyceps-400">
                    Frontend
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        React, Vue.js
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        Tailwind CSS, Bootstrap
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        HTML5, CSS3, JavaScript/TypeScript, PHP
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        Animations & interactions
                    </li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
                    Backend & Outils
                    </h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        Node.js, PHP, Python
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        MySQL, PostgreSQL, MariaDB
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        Git, GitHub, CI/CD
                    </li>
                    <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-cordyceps-500" />
                        SEO, Analytics, Performance
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.4}>
            <div className="bg-gray-100 dark:bg-gray-900 rounded-3xl p-8 text-center">
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Ma Philosophie
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300 italic mb-6 max-w-2xl mx-auto">
                "Chaque projet est unique et mérite une attention particulière. Je ne crée pas de sites web standards, je crée VOTRE site web."
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-cordyceps-100 dark:bg-cordyceps-900/30 text-cordyceps-700 dark:text-cordyceps-300 rounded-full font-semibold">
                    🎯 Orienté résultats
                </span>
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold">
                    💬 Communication transparente
                </span>
                <span className="px-4 py-2 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full font-semibold">
                    ⚡ Livraison rapide
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-semibold">
                    🎨 Design impactant
                </span>
                </div>
            </div>
            </ScrollReveal>
        </div>
        </div>
    );
};

export default About;