<?php
// Headers CORS pour accepter les requêtes depuis React
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Gestion de la requête OPTIONS (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Vérifier que c'est bien une requête POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
    exit();
}

// Importer PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

// Charger la configuration
$config = require 'config.php';

// Récupérer les données JSON
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validation des données
if (empty($data['from_name']) || empty($data['from_email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Tous les champs sont obligatoires']);
    exit();
}

// ========== VÉRIFICATION RECAPTCHA V3 ==========
$recaptchaToken = $data['recaptchaToken'] ?? '';

if (empty($recaptchaToken)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Token reCAPTCHA manquant']);
    exit();
}

// Vérifier le token auprès de Google
$recaptchaSecret = $config['recaptcha_secret_key'];
$verifyURL = 'https://www.google.com/recaptcha/api/siteverify';

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query([
            'secret' => $recaptchaSecret,
            'response' => $recaptchaToken,
            'remoteip' => $_SERVER['REMOTE_ADDR']
        ])
    ]
]);

$recaptchaResponse = file_get_contents($verifyURL, false, $context);
$recaptchaData = json_decode($recaptchaResponse);

// Vérifier la validité de la réponse
if (!$recaptchaData->success) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Vérification reCAPTCHA échouée'
    ]);
    exit();
}

// Vérifier le score (si disponible)
$recaptchaScore = isset($recaptchaData->score) ? $recaptchaData->score : null;

if ($recaptchaScore !== null && $recaptchaScore < 0.5) {
    http_response_code(400);
    echo json_encode([
        'success' => false, 
        'message' => 'Score reCAPTCHA trop faible',
        'score' => $recaptchaScore
    ]);
    exit();
}
// ========== FIN VÉRIFICATION RECAPTCHA V3 ==========

// Nettoyer les données
$name = htmlspecialchars(strip_tags(trim($data['from_name'])));
$email = filter_var(trim($data['from_email']), FILTER_VALIDATE_EMAIL);
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Valider l'email
if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email invalide']);
    exit();
}

try {
    $mail = new PHPMailer(true);

    // Configuration SMTP depuis config.php
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'] === 'tls' ? PHPMailer::ENCRYPTION_STARTTLS : PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = $config['smtp_port'];
    $mail->CharSet    = 'UTF-8';

    // Expéditeur et destinataire
    $mail->setFrom($config['email_from'], $config['email_from_name']);
    $mail->addAddress($config['email_to'], 'Cordyceps Création');
    $mail->addReplyTo($email, $name);

    // Contenu de l'email
    $mail->isHTML(true);
    $mail->Subject = '📧 Nouveau message depuis cordyceps-creation.fr';
    
    // Formater le score pour l'affichage
    $scoreDisplay = $recaptchaScore !== null ? number_format($recaptchaScore, 2) : 'N/A';
    $scoreColor = $recaptchaScore !== null && $recaptchaScore >= 0.7 ? '#4CAF50' : '#FFA500';
    
    $mail->Body = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { 
                    background: linear-gradient(135deg, #84B526, #6A911F); 
                    color: white; 
                    padding: 30px; 
                    text-align: center; 
                    border-radius: 10px 10px 0 0; 
                }
                .content { 
                    background: #f9f9f9; 
                    padding: 30px; 
                    border-radius: 0 0 10px 10px; 
                }
                .field { 
                    margin-bottom: 20px; 
                    padding: 15px; 
                    background: white; 
                    border-radius: 8px; 
                }
                .label { 
                    font-weight: bold; 
                    color: #84B526; 
                    margin-bottom: 5px; 
                }
                .value { 
                    color: #333; 
                }
                .footer { 
                    text-align: center; 
                    margin-top: 20px; 
                    color: #666; 
                    font-size: 12px; 
                }
                .score-badge {
                    display: inline-block;
                    padding: 5px 12px;
                    background: {$scoreColor};
                    color: white;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 14px;
                }
            </style>
        </head>
        <body>
            <div class='container'>
                <div class='header'>
                    <h1 style='margin: 0 0 10px 0;'>📧 Nouveau message</h1>
                    <p style='margin: 0;'>
                        ✅ Vérifié par reCAPTCHA v3
                        <span class='score-badge'>Score: {$scoreDisplay}</span>
                    </p>
                </div>
                <div class='content'>
                    <div class='field'>
                        <div class='label'>👤 Nom</div>
                        <div class='value'>{$name}</div>
                    </div>
                    <div class='field'>
                        <div class='label'>✉️ Email</div>
                        <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
                    </div>
                    <div class='field'>
                        <div class='label'>💬 Message</div>
                        <div class='value' style='white-space: pre-wrap;'>{$message}</div>
                    </div>
                </div>
                <div class='footer'>
                    Envoyé depuis cordyceps-creation.fr<br>
                    IP: {$_SERVER['REMOTE_ADDR']} | " . date('d/m/Y à H:i:s') . "<br>
                    Score reCAPTCHA: {$scoreDisplay} / 1.00
                </div>
            </div>
        </body>
        </html>
    ";

    // Version texte alternative
    $mail->AltBody = "Nouveau message de {$name} ({$email})\n\n{$message}\n\nScore reCAPTCHA: {$scoreDisplay}\nEnvoyé depuis cordyceps-creation.fr";

    // Envoyer l'email
    $mail->send();
    
    // Réponse succès
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Message envoyé avec succès !',
        'recaptcha_score' => $recaptchaScore
    ]);

} catch (Exception $e) {
    // Réponse erreur
    http_response_code(500);
    echo json_encode([
        'success' => false, 
        'message' => 'Erreur lors de l\'envoi : ' . $mail->ErrorInfo
    ]);
}
?>