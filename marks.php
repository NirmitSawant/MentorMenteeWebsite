<?php
// Initialize the session
session_start();
 
require_once "config.php";
  
$roll_no = $_POST['roll_no'];  
$subject = $_POST['subject'];
$marks = $_POST['marks']; 
  
$sql = "INSERT INTO marks (rollno,	subject, marks) VALUES ('$roll_no','$subject','$marks')";  
  
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