<?php
include 'db.php';
$id= $_GET['id'];
$sql="delete from tasks where id='$id'";
$val=$conn->query($sql);
if($val){
	header('location:index.php');
};
?>