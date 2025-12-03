import React from 'react';

const PrivacyCuisinEssentiel = () => {
    return (
        <div className="container mx-auto px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
                    Politique de Confidentialité - Cuisin'Essentiel
                </h1>
                
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg space-y-8">
                    <section>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Date de dernière mise à jour : </strong>20 novembre 2025
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Cuisin'Essentiel respecte votre vie privée. Cette politique explique comment nous traitons vos données.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            1. Responsable du traitement
                        </h2>
                        <div className="text-gray-700 dark:text-gray-300 space-y-2">
                            <p><strong>Responsable :</strong> Cordyceps Création</p>
                            <p><strong>Application :</strong> Cuisin'Essentiel</p>
                            <p><strong>Email :</strong> contact@cordyceps-creation.fr</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            2. Données collectées
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong className="text-purple-600 dark:text-purple-400">Toutes vos données sont stockées localement sur votre appareil.</strong> Nous n'avons accès à aucune de vos données personnelles.
                        </p>
                        
                        <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-200">
                            Données stockées localement
                        </h3>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                            <li><strong>Recettes :</strong> Toutes les recettes que vous enregistrez sont stockées uniquement sur votre appareil</li>
                            <li><strong>Préférences :</strong> Vos paramètres et catégories personnalisées</li>
                            <li><strong>Statut Premium :</strong> Information concernant votre achat Premium</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-3 mt-6 text-gray-800 dark:text-gray-200">
                            Données liées aux achats in-app
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            Lorsque vous effectuez un achat Premium via Google Play :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                            <li>Google Play collecte et traite les informations de paiement</li>
                            <li>Nous recevons uniquement la confirmation d'achat (pas vos données bancaires)</li>
                            <li>Consultez la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">Politique de confidentialité de Google Play</a></li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            3. Utilisation des données
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Vos données sont utilisées uniquement pour :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                            <li>Stocker et afficher vos recettes</li>
                            <li>Gérer vos préférences d'utilisation</li>
                            <li>Activer les fonctionnalités Premium après achat</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            4. Partage des données
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            <strong>Nous ne partageons, ne vendons, ni ne transmettons vos données à des tiers.</strong>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            L'application fonctionne de manière totalement hors ligne. Vos recettes ne quittent jamais votre appareil, sauf si vous utilisez la fonctionnalité d'export (disponible en Premium).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            5. Sécurité des données
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Vos données sont stockées localement sur votre appareil et protégées par les mécanismes de sécurité de votre système d'exploitation Android.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            6. Vos droits
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Vous pouvez à tout moment :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                            <li><strong>Supprimer vos recettes :</strong> depuis l'application</li>
                            <li><strong>Désinstaller l'application :</strong> cela supprime toutes les données locales</li>
                            <li><strong>Nous contacter :</strong> pour toute question</li>
                        </ul>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                            Vous disposez également du droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline">www.cnil.fr</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            7. Import de recettes depuis Internet
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Lorsque vous importez une recette depuis un site web :
                        </p>
                        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
                            <li>L'application télécharge uniquement le contenu de la recette</li>
                            <li>Aucune donnée personnelle n'est transmise aux sites tiers</li>
                            <li>Le contenu est stocké localement sur votre appareil</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            8. Modifications de cette politique
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                            Nous pouvons mettre à jour cette politique. Les modifications seront publiées sur cette page avec une nouvelle date de mise à jour. Nous vous encourageons à consulter régulièrement cette page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                            9. Contact
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Pour toute question concernant cette politique de confidentialité :
                        </p>
                        <div className="text-gray-700 dark:text-gray-300 space-y-2">
                            <p><strong>Email :</strong> contact@cordyceps-creation.fr</p>
                        </div>
                    </section>

                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Cordyceps Création</strong><br />
                            Développeur de Cuisin'Essentiel
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyCuisinEssentiel;