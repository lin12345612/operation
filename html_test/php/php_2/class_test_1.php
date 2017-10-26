<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 11:17
 */
class Player{
    var $height ;
    var $weight ;
    function  getHeight(){
        return $this->height;
    }
    function getWeight(){
        return $this->weight;
    }
}

$player = new Player();
$player->weight = 100;
$player->height = 2.03;
echo "詹姆斯的官方身高是".$player->getHeight()."米，体重是".$player->getWeight()."磅";


