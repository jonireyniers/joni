<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verkrijg formuliergegevens
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // E-mailinstellingen
    $to = "jonireyniers@hotmail.be";
    $subject = $name; // De naam wordt het onderwerp van de e-mail
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "Content-Type: text/html; charset=UTF-8";

    // E-mailbericht
    $body = "<h3>Bericht van: $name</h3><p>$message</p>";

    // Verstuur de e-mail
    if (mail($to, $subject, $body, $headers)) {
        // Bevestiging dat de e-mail is verzonden
        echo "E-mail succesvol verzonden.";
    } else {
        // Foutmelding als de e-mail niet verzonden kan worden
        echo "Er is een fout opgetreden bij het verzenden van de e-mail.";
    }
}
?>
