<?php

if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $mailFrom = $_POST['mail'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  $mailTo = "180403523@live.unilag.edu.ng"; 
  $headers = "From: My Website".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: contact.html?mailsend")
}



?>
