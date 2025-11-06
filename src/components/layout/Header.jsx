import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { navigation } from '../../data/navigation';

const Header = ({ darkMode, setDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-20">
            <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
            >
            <img 
                src="/logo.png" 
                alt="Cordyceps Création Logo" 
                className="h-12 w-auto"
            />
            <span className="hidden md:inline text-2xl font-black bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 bg-clip-text text-transparent">
                Cordyceps Création
            </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navigation.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.path}
                    className={({ isActive }) =>
                    `font-semibold transition-colors ${
                        isActive
                        ? 'text-cordyceps-600 dark:text-cordyceps-500'
                        : 'text-gray-700 dark:text-gray-300 hover:text-cordyceps-600 dark:hover:text-cordyceps-500'
                    }`
                    }
                >
                    {item.label}
                </NavLink>
                ))}
                <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
                aria-label="Toggle dark mode"
                >
                {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                )}
                </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
                <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle dark mode"
                >
                {darkMode ? (
                    <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                    <Moon className="w-5 h-5 text-gray-700" />
                )}
                </button>
                <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
                >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
                {navigation.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                    `block w-full text-left py-3 px-4 rounded-lg transition-colors ${
                        isActive
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                    }
                >
                    {item.label}
                </NavLink>
                ))}
            </div>
            )}
        </div>
        </nav>
    );
};

export default Header;