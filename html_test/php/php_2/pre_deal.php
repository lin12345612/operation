<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/27
 * Time: 9:21
 */
$serverName = "localhost";
$username   = "root";
$password   = "";

$conn = new mysqli($serverName,$username,$password);
//测试连接
if($conn->connect_error){
    die ("连接失败：".$conn->connect_error);
}

//创建数据库
$sql ="CREATE DATABASE my_db";
if($conn->query($sql)==TRUE){
    ECHO "数据库创建成功";
}else {
    echo "Error creating database".$conn->error;
}
