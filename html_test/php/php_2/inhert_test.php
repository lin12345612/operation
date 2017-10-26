<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 15:48
 */

class Career_1{
    public $score_1=1000;

    public function score_Up(){
        $this->score_1+=20;
        return $this->score_1;
    }
}

class Career_regular extends Career_1{

    public function score_Up()
    {
        $this->score_1=parent::score_Up()+30;
//        return $this->score_1;
    }
}

$career = new Career_regular();
$career->score_Up();
echo $career->score_1;