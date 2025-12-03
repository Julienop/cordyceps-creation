import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';

const Privacy = () => {
    return (
        <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Politique de Confidentialité
            </h1>
            </ScrollReveal>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg space-y-8">
            <section>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                <strong>Date de dernière mise à jour : </strong>10 octobre 2025
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                Cordyceps Création accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. Responsable du traitement
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Responsable :</strong> Cordyceps Création</p>
                <p><strong>Email :</strong> contact@cordyceps-creation.fr</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. Données collectées
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous collectons les données personnelles suivantes lorsque vous utilisez notre formulaire de contact :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Message et contenu de votre demande</li>
                <li>Adresse IP (pour la sécurité et la prévention des abus)</li>
                <li>Date et heure de la soumission</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. Finalité du traitement
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vos données personnelles sont collectées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li>Répondre à vos demandes de contact et de devis</li>
                <li>Gérer la relation client</li>
                <li>Vous envoyer des informations relatives à nos services (uniquement avec votre consentement)</li>
                <li>Améliorer nos services</li>
                <li>Assurer la sécurité de notre site web</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. Base légale du traitement
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Le traitement de vos données personnelles est fondé sur :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>Votre consentement explicite lors de l'utilisation du formulaire de contact</li>
                <li>L'exécution de mesures précontractuelles prises à votre demande</li>
                <li>Nos intérêts légitimes en matière de gestion commerciale et de sécurité</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. Durée de conservation
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Vos données personnelles sont conservées pendant la durée nécessaire à la réalisation des finalités mentionnées ci-dessus, et en tout état de cause :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>Pour les demandes de contact : 3 ans à compter du dernier contact</li>
                <li>Pour les données de prospection : 3 ans à compter de la collecte ou du dernier contact</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. Destinataires des données
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Vos données personnelles sont destinées uniquement à Cordyceps Création et ne sont jamais vendues, louées ou transmises à des tiers à des fins commerciales. Elles peuvent être transmises à nos prestataires techniques (hébergement, service d'emailing) uniquement dans le cadre strict de leurs missions.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                7. Vos droits
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>Droit d'accès :</strong> obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
                <li><strong>Droit de rectification :</strong> faire corriger des données inexactes ou incomplètes</li>
                <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
                <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                Pour exercer ces droits, vous pouvez nous contacter à : <strong>contact@cordyceps-creation.fr</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">www.cnil.fr</a>
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                8. Cookies et traceurs
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre site utilise les technologies suivantes :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (préférence mode sombre)</li>
                <li><strong>Google reCAPTCHA :</strong> pour protéger le formulaire de contact contre le spam (soumis aux conditions de Google)</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                9. Sécurité des données
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre la destruction, la perte, l'altération, la divulgation ou l'accès non autorisé, notamment :
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4 mt-4">
                <li>Chiffrement SSL/TLS des communications</li>
                <li>Protection par reCAPTCHA contre les soumissions automatisées</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières</li>
                </ul>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                10. Modifications de la politique
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                11. Contact
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles, vous pouvez nous contacter :
                </p>
                <div className="text-gray-700 dark:text-gray-300 space-y-2 mt-4">
                <p><strong>Email :</strong> contact@cordyceps-creation.fr</p>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
};

export default Privacy;