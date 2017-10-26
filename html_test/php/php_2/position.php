<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/24
 * Time: 19:50
 */
  $maxLine = 4;
  $num     = 21;
 if($num>0){
  if(($num%$maxLine)!=0)     {
      $row  = ceil($num/$maxLine);
      $line = $num%$maxLine;
  }
  if(($num%$maxLine)==0){
      $row  = $num/$maxLine;
      $line = $maxLine;
  }

 echo "编号为".$num."的同学的座位在第".$row."排"."第".$line."列。";
 }
else{
    echo "请输入正确的座位号！！！！";
}