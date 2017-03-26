<?php
if(isset($_POST['submit'])){

    //collect form data
    $email = $_POST['email'];
	
	// Checking the email address in CSV file
	$string = file_get_contents("newsletter.csv");
	$string = explode("\n", $string);

	// check for empty field
	if ($email == "") {
         $error[] = 'Si Prega di Riempire i Campi';
    }
		
	// check for a valid email address
    elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)){
         $error[] = 'Please enter a valid email address';
    }
	
	// check if email address exist
	elseif(in_array($email, $string)){
		$error[] = "Utente Esiste!";
	} 
		
    // if no errors carry on
    if(!isset($error)){
		
        # Title of the CSV
        $Content = "Email\n";

        // set the data of the CSV
        $Content .= "$email\n";

        # set the email address and create CSV file
		$fp = file_put_contents("newsletter.csv", $email . PHP_EOL, FILE_APPEND);
		$savestring = $email . "\n";
        echo "<p style='color:green'>Registrazione Avvenuta!</p>";
        exit();
    }
}

// if their are errors display them
if(isset($error)){
    foreach($error as $error){
        echo "<p style='color:#ff0000'>$error</p>";
    }
}
?> 

<form action='' method='post'>
<p><label>Email</label><br><input type='text' name='email' value=''></p> 
<p><input type='submit' name='submit' value='Submit'></p> 
</form>