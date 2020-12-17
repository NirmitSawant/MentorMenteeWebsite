<?php
require_once "config.php";
require_once "session.php";
$error = '';

		$email = $_POST['email'];
		$password = $_POST['password'];
		if (empty($email)){
			$error .= '<p class="erorr">Please enter email.</p>';
		}
		if (empty($password)){
			$error .= '<p class="erorr">Please enter password.</p>';
		}
		$email = stripcslashes($email);
		$password = stripcslashes($password);
		$email = mysqli_real_escape_string($db, $_POST['email']);
		$password = mysqli_real_escape_string($db, $_POST['password']);

		mysqli_select_db($db, "mentor_mentee");

		$result = mysqli_query($db, "select * from mentors where email='$email' and password='$password'")
					or die("Failed to query database".mysqli_error($db));
		$row = mysqli_fetch_array($result);

		if($row['email']==$email && $row['password']==$password){
			$_SESSION['userid'] = $row['id'];
			$_SESSION['user'] = $row;
			header('Location: mentordone.php');
		}
		else{
			header('Location: invalidmentor.php');
		}
?>