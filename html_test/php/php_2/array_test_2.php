<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 10:31
 */

$b=array();
for($i = 0;$i<10;$i++){
    $b[$i]=rand(1,50);
}
for($j=0;$j<10;$j++){
    echo "数组的第".$j."位为：".$b[$j];
    echo "<br >";
}

$connect = array(
    'apple' => '苹果',
    'orange'=> "橘子",
    'pear'  => "梨",
    'grape' => "葡萄",
    'mango' => "芒果",
);

foreach($connect  as $key => $value){
     echo $key."翻译为".$value;
     echo "<br>";
}