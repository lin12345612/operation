<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 8:48
 */
$step = rand(1,6);
echo "当前投掷的点数为".$step;
$num  = 0;
$num+=$step;
echo "<br \>";
while($step==6){
    echo "运气不错，获得了“6”点，获得多一次投掷机会";
    echo "<br \>";
    $step=rand(1,6);
    echo "再次投掷得到的点数为".$step;
    if($step==6){
        echo "这运气真是没谁了，连续拿到6，真是6666哦！！！";
    }
    echo "<br \>";
    $num+=$step;
    echo "<br \>";
}
echo "此次投掷筛子总共获得前进的步数为".$num;