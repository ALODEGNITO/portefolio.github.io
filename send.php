<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $prenom = htmlspecialchars($_POST["prenom"]);
    $nom = htmlspecialchars($_POST["nom"]);
    $sujet = htmlspecialchars($_POST["sujet"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "tanguytoles@gmail.com";
    $subject = "Nouveau message portfolio : " . $sujet;

    $body = "
    Prénom: $prenom
    Nom: $nom

    Message:
    $message
    ";

    $headers = "From: noreply@portfolio.com\r\n";
    $headers .= "Reply-To: $prenom $nom\r\n";

    mail($to, $subject, $body, $headers);

    echo "Message envoyé avec succès !";
}
?>
