<?php
// Initialize the session
session_start();
 
require_once "config.php";
  
$roll_no = $_POST['roll_no'];
$concern = $_POST['concern']; 
  
$sql = "INSERT INTO concern (rollno, concern) VALUES ('$roll_no','$concern')";  
  
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