<?php
/**
 * Created by PhpStorm.
 * User: 啊烁
 * Date: 2017/7/25
 * Time: 9:32
 */
$stuff = array(
    '01'=> array('老板',"50"),
    '02'=> array('总经理',"45"),
    '03'=> array('副总经理',"45"),
    '04'=> array('总监',"40"),
    '05'=> array('副总监',"40"),
    '06'=> array('部门经理',"35"),
    '07'=> array('员工',"30"),
);
$i = 1;
foreach($stuff as $n=>$a){
    echo $n;
    echo "：";
    foreach($a as $t )
        echo $t;
    echo "<br />";
}
echo "<br \>";