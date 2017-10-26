<?php 
	
	$shuzu = array(); 

	$a=array();// 将一个小时的上料数据放入对应的数组
	$num1=array(
		"suc"   => 55,
		"fail"  => 11,
		"total" => 66,
		"time"  => "14:00"	
		);
	$num11=array(
		"suc"   => 54,
		"fail"  => 10,
		"total" => 64,
		"time"  => "13:00"	
		);
	$num12=array(
		"suc"   => 56,
		"fail"  => 13,
		"total" => 69,
		"time"  => "12:00"	
		);
	$num13=array(
		"suc"   => 57,
		"fail"  => 12,
		"total" => 69,
		"time"  => "11:00"	
		);
	$num14=array(
		"suc"   => 60,
		"fail"  => 15,
		"total" => 75,
		"time"  => "10:00"	
		);
	$num15=array(
		"suc"   => 59,
		"fail"  => 14,
		"total" => 73,
		"time"  => "9:00"	
		);
	array_push($a, $num1);
	array_push($a, $num11);
	array_push($a, $num12);
	array_push($a, $num13);
	array_push($a, $num14);
	array_push($a, $num15);

	$b=array();// 将一个小时的换料数据放入对应的数组
	$num2=array(
		"suc"   => 77,
		"fail"  => 3,
		"total" => 80,
		"time"  => "14:00"
		);
	$num21=array(
		"suc"   => 78,
		"fail"  => 4,
		"total" => 82,
		"time"  => "13:00"
		);
	$num22=array(
		"suc"   => 79,
		"fail"  => 5,
		"total" => 84,
		"time"  => "12:00"
		);
	$num23=array(
		"suc"   => 80,
		"fail"  => 6,
		"total" => 86,
		"time"  => "11:00"
		);
	$num24=array(
		"suc"   => 81,
		"fail"  => 7,
		"total" => 88,
		"time"  => "10:00"
		);
	$num25=array(
		"suc"   => 76,
		"fail"  => 20,
		"total" => 96,
		"time"  => "9:00"
		);
	array_push($b, $num2);
	array_push($b, $num21);
	array_push($b, $num22);
	array_push($b, $num23);
	array_push($b, $num24);
	array_push($b, $num25);

	$c=array();// 将一个小时的抽检数据放入对应的数组
	$num3=array(
		"suc"   => 48,
		"fail"  => 7,
		"total" => 55,
		"time"  => "14:00"
		);
	$num31=array(
		"suc"   => 49,
		"fail"  => 8,
		"total" => 57,
		"time"  => "13:00"
		);
	$num32=array(
		"suc"   => 50,
		"fail"  => 9,
		"total" => 59,
		"time"  => "12:00"
		);
	$num33=array(
		"suc"   => 51,
		"fail"  => 10,
		"total" => 61,
		"time"  => "11:00"
		);
	$num34=array(
		"suc"   => 52,
		"fail"  => 11,
		"total" => 63,
		"time"  => "10:00"
		);
	$num35=array(
		"suc"   => 53,
		"fail"  => 12,
		"total" => 65,
		"time"  => "9:00"
		);
	array_push($c, $num3);
	array_push($c, $num31);
	array_push($c, $num32);
	array_push($c, $num33);
	array_push($c, $num34);
	array_push($c, $num35);

	$d=array();// 将一个小时的全检数据放入对应的数组
	$num4=array(
		"suc"   => 40,
		"fail"  => 5,
		"total" => 45,
		"time"  => "14:00"
		);
	$num41=array(
		"suc"   => 41,
		"fail"  => 6,
		"total" => 47,
		"time"  => "13:00"
		);
	$num42=array(
		"suc"   => 42,
		"fail"  => 7,
		"total" => 49,
		"time"  => "12:00"
		);
	$num43=array(
		"suc"   => 43,
		"fail"  => 8,
		"total" => 51,
		"time"  => "11:00"
		);
	$num44=array(
		"suc"   => 44,
		"fail"  => 9,
		"total" => 53,
		"time"  => "10:00"
		);
	$num45=array(
		"suc"   => 39,
		"fail"  => 4,
		"total" => 43,
		"time"  => "9:00"
		);
	array_push($d, $num4);
	array_push($d, $num41);
	array_push($d, $num42);
	array_push($d, $num43);
	array_push($d, $num44);
	array_push($d, $num45);

	$shuzu["feed"]=$a;
	$shuzu["changes"]=$b;
	$shuzu["somes"]=$c;
	$shuzu["alls"]=$d;
		

	echo json_encode($shuzu);
 ?>