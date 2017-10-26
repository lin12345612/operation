<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/26
 * Time: 15:55
 */

$serverName = "localhost";
$userName   = "root";
$password   = "";
$conn =  new mysqli($serverName,$userName,$password);   //创建连接
if($conn->connect_error){
    die("连接失败".mysqli_connect_error());
}


$sql = "CREATE DATABASE myDB";
if(mysqli_query($conn,$sql)){
    echo "数据库建立成功";
}
else {
    echo "Error Creating database:".mysqli_error($conn);
}

mysqli_close($conn);
?>