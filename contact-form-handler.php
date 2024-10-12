<?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (!empty($name) && !empty($email) && !empty($message)) {
      // Email details
      $to = "fredkawayidah@gmail.com"; // Your email address
      $subject = "New Contact Message from Nation Infinity Africa Website";
      $email_body = "You have received a new message from $name.\n\nEmail: $email\n\nMessage:\n$message\n";
      $headers = "From: $email";

      // Send email
      if (mail($to, $subject, $email_body, $headers)) {
        echo "Message sent successfully!";
      } else {
        echo "Failed to send the message. Please try again later.";
      }
    } else {
      echo "All fields are required.";
    }
  }
?>
