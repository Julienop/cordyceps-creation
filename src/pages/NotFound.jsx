import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-6 py-20">
            <ScrollReveal animation="fade-up">
                <div className="text-center max-w-2xl">
                    {/* Illustration 404 */}
                    <div className="mb-8">
                        <h1 className="text-9xl font-bold text-cordyceps-600 dark:text-cordyceps-400 mb-4">
                            404
                        </h1>
                        <ScrollReveal animation="zoom-in" duration={0.8}>
                        <div className="flex justify-center mb-6">
                            <img 
                            src="/notfound.gif" 
                            alt="Elle est où ?" 
                            className="h-80 w-auto md:h-80 lg:h-80 object-contain"
                            />
                        </div>
                        </ScrollReveal>
                    </div>

                    {/* Message */}
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Page introuvable
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                        Oups ! La page que vous recherchez n'existe pas ou a été déplacée.
                    </p>

                    {/* Suggestions */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 mb-8 shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Que pouvez-vous faire ?
                        </h3>
                        <ul className="text-left space-y-2 text-gray-600 dark:text-gray-400">
                            <li className="flex items-center gap-2">
                                <span className="text-cordyceps-600 dark:text-cordyceps-400">✓</span>
                                Vérifier l'URL saisie
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cordyceps-600 dark:text-cordyceps-400">✓</span>
                                Retourner à la page d'accueil
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cordyceps-600 dark:text-cordyceps-400">✓</span>
                                Utiliser le menu de navigation
                            </li>
                        </ul>
                    </div>

                    {/* Boutons d'action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <Home className="w-5 h-5" />
                            Retour à l'accueil
                        </Link>
                        
                        <button
                            onClick={() => navigate(-1)}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Page précédente
                        </button>
                    </div>

                    {/* Liens rapides */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            Liens rapides :
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/realisations"
                                className="text-cordyceps-600 dark:text-cordyceps-400 hover:underline"
                            >
                                Réalisations
                            </Link>
                            <Link
                                to="/prestations"
                                className="text-cordyceps-600 dark:text-cordyceps-400 hover:underline"
                            >
                                Prestations
                            </Link>
                            <Link
                                to="/contact"
                                className="text-cordyceps-600 dark:text-cordyceps-400 hover:underline"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default NotFound;