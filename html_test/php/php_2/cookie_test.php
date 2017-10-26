<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/26
 * Time: 11:18
 */
$value = time();
setcookie("name",$value);
if(isset($_COOKIE['name'
    ])){
    echo 'success';
}