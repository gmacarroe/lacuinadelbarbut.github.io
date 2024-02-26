<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$phpmailer = new PHPMailer();
$phpmailer->isSMTP();
$phpmailer->Host = 'sandbox.smtp.mailtrap.io';
$phpmailer->SMTPAuth = true;
$phpmailer->Port = 2525;
$phpmailer->Username = '074a4a6e089887';
$phpmailer->Password = '8e1af2be2e82f6';

// Recollir les dades del formulari
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Configurar el destinatari i el cos del correu electrònic
$to = "geri.macarro@gmail.com";
$subject = "Missatge de contacte: " . $subject;
$body = "Nom: " . $name . "\n";
$body .= "Correu electrònic: " . $email . "\n";
$body .= "Telèfon: " . $phone . "\n\n";
$body .= "Missatge:\n" . $message;

// Configurar les opcions de correu electrònic
$mailOptions = [
    'host' => $phpmailer->Host,
    'port' => $phpmailer->Port,
    'username' => $phpmailer->Username,
    'password' => $phpmailer->Password,
    'from' => $email,
    'to' => $to,
    'subject' => $subject,
    'body' => $body,
];


// Enviar el correu electrònic
if (sendMail($mailOptions)) {
    echo "El teu missatge s'ha enviat amb èxit.";
} else {
    echo "Hi ha hagut un problema en enviar el missatge.";
}

// Funció per enviar correus electrònics utilitzant Mailtrap
function sendMail($options)
{
    global $phpmailer;

    $phpmailer->setFrom($options['from']);
    $phpmailer->addAddress($options['to']);
    $phpmailer->Subject = $options['subject'];
    $phpmailer->Body = $options['body'];

    return $phpmailer->send();
}
