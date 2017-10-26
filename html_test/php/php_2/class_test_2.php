<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 11:43
 */
class Team{
    public $name;
    public $num;
    public   function setName($i){
       $this->name =$i;
    }
    public   function getName(){
        return $this->name;
    }

    public function  setNum($j){
        $this->num=$j;
    }
    public function getNum(){
        return $this->num;
    }
}

$team = new Team();
$team->setName('CLEVELAND');
$team->setNum(15);
echo "骑士队的队名英文名为".$team->getName().",对内总人数为：".$team->getNum()."人";