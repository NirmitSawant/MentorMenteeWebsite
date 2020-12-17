<?php
// Initialize the session
session_start();
 
require_once "config.php";
  
$roll_no = $_POST['roll_no'];  
$subject = $_POST['subject'];
$attendence = $_POST['attendence']; 
  
$sql = "INSERT INTO attendence (rollno,	subject, attendence) VALUES ('$roll_no','$subject','$attendence')";  
  
if(!mysqli_query($link,$sql))  
{  
    echo 'Not inserted';  
}  
else  
{  
    header("refresh:1; url=menteedone.php"); 
}  
// Close connection

mysqli_close($link);
?>