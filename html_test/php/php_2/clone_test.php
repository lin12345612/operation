<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/26
 * Time: 8:18
 */
class Name{
public $id = "asdfghhjkll";
public function __clone(){
    $other = new Name();
    $other->id = $this->id;
    }
}

$id_1 = new Name();
$id_1->id="456";
$id_2 = clone $id_1;
//echo var_dump($id_2);
echo $id_2->id;
echo "<br>";

$str = new Name();
$a = serialize($str);
echo $a."<br>";


