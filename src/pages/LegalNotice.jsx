import React from 'react';
import ScrollReveal from '../components/ui/ScrollReveal';

const LegalNotice = () => {
    return (
        <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-up" delay={0.2}>
            <h1 className="text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Mentions Légales
            </h1>
            </ScrollReveal>
            
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg space-y-8">
            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                1. Informations légales
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Raison sociale :</strong> Cordyceps Création</p>
                <p><strong>Forme juridique :</strong> Auto-entrepreneur</p>
                <p><strong>SIRET :</strong> 990 070 526 00019</p>
                <p><strong>Email :</strong> contact@cordyceps-creation.fr</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                2. Directeur de publication
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Le directeur de la publication du site est Julien OPERON.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                3. Hébergement
                </h2>
                <div className="text-gray-700 dark:text-gray-300 space-y-2">
                <p><strong>Hébergeur :</strong> o2switch</p>
                <p><strong>Adresse :</strong> chemin des Pardiaux, 63000 Clermont-Ferrand</p>
                <p><strong>Téléphone :</strong> 04.44.44.60.40</p>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                4. Propriété intellectuelle
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                5. Limitation de responsabilité
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Cordyceps Création s'efforce d'assurer au mieux l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, Cordyceps Création ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-4">
                En conséquence, Cordyceps Création décline toute responsabilité pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur ce site.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                6. Liens hypertextes
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Les liens hypertextes mis en place dans le cadre du présent site internet en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Cordyceps Création.
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                7. Droit applicable
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                Les présentes mentions légales sont soumises au droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
            </section>
            </div>
        </div>
        </div>
    );
};

export default LegalNotice;