<?php
/**
 * Configuration email - TEMPLATE
 * 
 * INSTRUCTIONS :
 * 1. Copiez ce fichier en "config.php" sur votre serveur
 * 2. Remplissez avec vos vrais identifiants
 * 3. NE COMMITEZ JAMAIS config.php sur Git !
 */

return [
    'smtp_host' => 'mail.votre-domaine.fr',        // Serveur SMTP O2switch
    'smtp_user' => 'contact@votre-domaine.fr',     // Votre email O2switch
    'smtp_pass' => 'VOTRE_MOT_DE_PASSE_ICI',       // Mot de passe de l'email
    'smtp_port' => 587,                             // 587 pour TLS, 465 pour SSL
    'smtp_secure' => 'tls',                         // 'tls' ou 'ssl'
    'email_to' => 'contact@votre-domaine.fr',      // Email de réception
    'email_from' => 'contact@votre-domaine.fr',    // Email d'envoi
    'email_from_name' => 'Formulaire Votre Site'   // Nom de l'expéditeur
];
?>