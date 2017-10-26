<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 17:22
 */
class Car {
    public $speed = 10;

    //在这里使用重载实现speedDown方法
    public function __call($name, $arguments)
    {
       if($name=='speedDown'){
           $this->speed+=10;
       }
    }

}
$car = new Car();
$car->speedDown(); //调用不存在的speedDown方法
echo $car->speed;