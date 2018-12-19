<?php
ini_set('default_charset', 'UTF-8');
header("Content-type: text/html; charset=utf-8");
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$formcontent="Olá,\nFoi recebida a seguinte mensagem enviada a partir do site do E2:"."\nDe: $name\nEmail: $email\nAssunto: $subject\nMensagem: $message";
$recipient = "dangerouswho@gmail.com";
$subject = "[NOVA MENSAGEM A PARTIR DO SITE DO E2]: ".$_POST['subject'];
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header('location: index.html');

?>
