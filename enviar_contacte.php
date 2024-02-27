<?php
// Recollir les dades del formulari
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Configurar el destinatari i el cos del correu electrònic
$to = "contacte.lacuinadelbarbut@gmail.com";
$subject = "Missatge de contacte: " . $subject;
$body = "Nom: " . $name . "\n";
$body .= "Correu electrònic: " . $email . "\n";
$body .= "Telèfon: " . $phone . "\n\n";
$body .= "Missatge:\n" . $message;

// Enviar el correu electrònic
if (mail($to, $subject, $body)) {
    echo "El teu missatge s'ha enviat amb èxit.";
} else {
    echo "Hi ha hagut un problema en enviar el missatge.";
}
