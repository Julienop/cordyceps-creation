import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ service }) => {
    const IconComponent = service.icon;
    
    return (
        <div className="group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative">
            <div className="inline-flex text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 origin-center">
            <IconComponent className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
            {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
            {service.description}
            </p>
            <ul className="space-y-2">
            {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>{feature}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
    );
};

export default ServiceCard;