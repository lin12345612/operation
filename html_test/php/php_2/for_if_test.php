<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 10:17
 */
$stuff = array(
    '01'=>'老板',
    '02'=>'总经理',
    '03'=>'副总经理',
    '04'=> '总监',
    '05'=> '副总监',
    '06'=>'部门经理',
    '07'=> '员工',
);
$id = 02;

foreach($stuff as $num=>$nam){
    if($num==$id)
        echo $num."、".$nam;
    echo "<br >";
}