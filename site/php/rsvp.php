<?php
$to = 'liannak@gmail.com';
if($_POST){
    $number     = $_POST['form-number'];
    $email    = $_POST['form-email'];
    $phone    = $_POST['form-phone'];
    $interest = $_POST['form-interest'];
    $message  = $_POST['form-message'];

//send email
    $email_subject = "You have an RSVP";
    $email_body = "Your wedsite has an RSVP.".
    " Here are the details:\n Name: $name \n Email: $email \n Phone: $phone  \n Interested About: $interest \n Message: \n $message";
    mail($to,$email_subject,$email_body);
}
?>

