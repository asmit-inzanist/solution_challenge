<?php
    $email=$_POST[email];
    $password=$_POST[password];
    $Username=$_POST[Username];
    
    //Database connection
    $conn = mysqli_connect('localhost','root','','registration');
    if($conn->connect_error){
        die('connection failed :' .$conn->connect_error);
    }else
    {
        $stmt = $conn->prepare("insert into registration(email, password, username")}
            values(?,?,?)");
        $stmt->bind_param("sss", $email,$password,$Username);
        $stmt->execute();
        echo "registered Successfully";
        $stmt->close();
        $conn->close();

?>
 