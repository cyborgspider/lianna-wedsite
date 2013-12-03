<?php
$to = 'contact@liannaandnat.com';
if ($_POST) {
    $number     = $_POST['guest_number'];
    $email    = $_POST['guest_email'];
    $guests    = $_POST['guest'];

//send email
    $email_subject = "You have an RSVP";
    $email_body = "Your wedsite has an RSVP. Here are the details:\n ".
    "Email: $email\n Number of Guests: $number\n";
    foreach($guests as $guest) {
        $email_body .= "Guest Name: ".$guest['name']."\n".$guest['name']."'s Meal Choice: ".$guest['meal']."\n\n";
    }
    $email_body .= "\n The website they rsvp'd from is ".$_SERVER['SERVER_NAME'];
    mail($to,$email_subject,$email_body);
    header("Location: /thanks.html");
}
?>


