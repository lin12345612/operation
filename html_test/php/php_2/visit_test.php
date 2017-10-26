<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 15:22
 */
class Career{
    private  $score = 10000;
    protected function scoreUp(){
        $this->score+=10000;
    }

    public function getScore(){
        return $this->score;
    }
    public function take(){  //增加take方法，使其可以调用受保护的scoreUp方法实现得分的增加
        $this->scoreUp();
    }
}

$player = new Career();
$player->take();
echo $player->getScore();