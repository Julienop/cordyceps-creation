import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { navigation, footerLinks } from '../../data/navigation';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-gray-900 dark:bg-black text-white py-12 mt-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
                <img 
                src="/logo.png" 
                alt="Cordyceps Création Logo" 
                className="h-12 w-auto"
                />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 bg-clip-text text-transparent">
                Cordyceps Création
                </h3>
                <p className="text-gray-400">
                Développement web sur-mesure pour transformer vos idées en réalité digitale
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Navigation</h4>
                <ul className="space-y-2">
                {navigation.map((item) => (
                    <li key={item.id}>
                    <button
                        onClick={() => navigate(item.path)}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        {item.label}
                    </button>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                <li>contact@cordyceps-creation.fr</li>
                <li>Toulouse, France</li>
                </ul>
            </div>
            </div>
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left">
                © 2025 Cordyceps Création. Tous droits réservés.
            </p>
            <div className="flex gap-6">
                {footerLinks.map((link) => (
                <button
                    key={link.id}
                    onClick={() => navigate(link.path)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                    {link.label}
                </button>
                ))}
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;