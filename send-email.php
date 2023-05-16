<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "adam.donen11@gmail.com";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Compose the email body
  $emailBody = "Name: $name\n";
  $emailBody .= "Email: $email\n";
  $emailBody .= "Subject: $subject\n\n";
  $emailBody .= "Message:\n$message";

  // Send the email
  mail($to, $subject, $emailBody, $headers);
}
?>
