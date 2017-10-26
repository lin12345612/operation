<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 8:22
 */
$num = rand(1,50);
if($num>20&&$num<=35){
    $level = "三";
}
if($num>35&&$num<=45){
    $level = "二";
}

if($num>45&&$num<=50){
    $level = "一";
}

switch($level){
    case "三":
        echo "恭喜你获得三等奖";
        break;
    case "二":
        echo "恭喜你获得二等奖";
        break;
    case "一 ":
        echo "恭喜你获得一等奖";
        break;
    default:
        echo "很遗憾，你没有获得奖励";
}