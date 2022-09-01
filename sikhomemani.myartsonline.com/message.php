<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$subject = "Faucetgraphy Website Enquiry";
$message = $_POST['message'];

$email_from = $email;

$email_subject = $subject;

$email_body = "User name: $name.\n";
               "User Email: $email.\n";
                "User Message: $message.\n";
                
$to = "OntlametseSenwa@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $email_from \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>