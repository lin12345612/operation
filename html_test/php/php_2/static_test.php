<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 14:33
 */
class Career{
    private  static  $score=10000;
    public function getScore(){
    return self::$score;
    }

    public static function scoreUp(){
        return self::$score+=10000;
}
}
$career = new Career();
Career::scoreUp();//调用静态方法加速
echo $career->getScore();