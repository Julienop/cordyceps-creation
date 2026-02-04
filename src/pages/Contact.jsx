import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Contact = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState({ 
        from_name: '', 
        from_email: '', 
        message: '' 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.from_name || !formData.from_email || !formData.message) {
            setSubmitStatus('error');
            setErrorMessage('Tous les champs sont obligatoires');
            setTimeout(() => setSubmitStatus(null), 5000);
            return;
        }

        // Vérifier que reCAPTCHA est chargé
        if (!executeRecaptcha) {
            setSubmitStatus('error');
            setErrorMessage('reCAPTCHA non chargé. Veuillez recharger la page.');
            setTimeout(() => setSubmitStatus(null), 5000);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        try {
            // Générer le token reCAPTCHA
            const recaptchaToken = await executeRecaptcha('contact_form');

            // Envoyer les données avec le token
            const response = await fetch('https://cordyceps-creation.fr/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    recaptchaToken: recaptchaToken
                })
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus('success');
                setFormData({ from_name: '', from_email: '', message: '' });
                setTimeout(() => setSubmitStatus(null), 5000);
            } else {
                setSubmitStatus('error');
                setErrorMessage(result.message || 'Une erreur est survenue');
                setTimeout(() => setSubmitStatus(null), 5000);
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi:', error);
            setSubmitStatus('error');
            setErrorMessage('Impossible de contacter le serveur. Veuillez réessayer.');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="container mx-auto px-6 py-20">
            <ScrollReveal animation="fade-down">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Contactez-moi
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Une question ? Un projet ? N'hésitez pas à me contacter
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="space-y-8">
                    <ScrollReveal animation="fade-right" delay={0.1}>
                        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                Informations de contact
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cordyceps-100 dark:bg-cordyceps-900/30 rounded-full">
                                        <Mail className="w-6 h-6 text-cordyceps-600 dark:text-cordyceps-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                        <a href="mailto:contact@cordyceps-creation.fr" className="text-lg font-semibold text-gray-900 dark:text-white hover:text-cordyceps-600 dark:hover:text-cordyceps-400 transition-colors">
                                            contact@cordyceps-creation.fr
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                        <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Linkedin</p>
                                        <a 
                                            href="https://www.linkedin.com/in/julien-operon-8801611a0" 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            Julien Operon
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                                        <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">Localisation</p>
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Toulouse, France
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-right" delay={0.2}>
                        <div className="bg-gradient-to-br from-cordyceps-500 to-cordyceps-700 rounded-3xl p-8 text-white">
                            <h3 className="text-2xl font-bold mb-4">Délais de réponse</h3>
                            <p className="mb-4">
                                Je m'engage à vous répondre dans les plus brefs délais suivant votre demande.
                            </p>
                            <p className="text-sm opacity-90">
                                Pour les projets urgents, n'hésitez pas à le mentionner dans votre message.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="fade-left" delay={0.1}>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                                    Votre nom *
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.from_name}
                                    onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-cordyceps-500 focus:outline-none transition-colors"
                                    placeholder="Jean Dupont"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                                    Votre email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.from_email}
                                    onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-cordyceps-500 focus:outline-none transition-colors"
                                    placeholder="jean.dupont@example.com"
                                    disabled={isSubmitting}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-semibold mb-2 text-gray-900 dark:text-white">
                                    Votre message *
                                </label>
                                <textarea
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows="6"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:border-cordyceps-500 focus:outline-none transition-colors resize-none"
                                    placeholder="Décrivez votre projet..."
                                    disabled={isSubmitting}
                                />
                            </div>

                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-3 bg-green-50 dark:bg-green-900/20 border-2 border-green-500 text-green-700 dark:text-green-400 px-4 py-3 rounded-xl">
                                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-semibold">
                                        Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-3 bg-red-50 dark:bg-red-900/20 border-2 border-red-500 text-red-700 dark:text-red-400 px-4 py-3 rounded-xl">
                                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    <p className="text-sm font-semibold">
                                        {errorMessage || 'Erreur lors de l\'envoi. Veuillez réessayer.'}
                                    </p>
                                </div>
                            )}
                            
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 bg-gradient-to-r from-cordyceps-500 to-cordyceps-700 text-white rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Envoi en cours...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Envoyer le message
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                * Champs obligatoires
                            </p>
                        </form>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Contact;