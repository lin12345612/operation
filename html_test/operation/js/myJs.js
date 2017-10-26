$(function(){
    var timer1 = null;
//    根据屏幕的宽度设置页面宽度
    var screenWidth  =  $(window).width();    //获取屏幕宽度
    var screenHeight = $(window).height();    //获取屏幕高度
    $(".nav .mainText").width(screenWidth);    //设置导航栏和内容宽度
    $(".mainText").height(screenHeight-100);   //

//    获取文字显示栏 的宽度
    var mainWidth = $("#main").width();
    var divs = $("#main div");  //获取div
    for(var i = 1;i<divs.length;i++){    //将第一个后面的div和section全部放到后面去
        $("#main div").eq(i).css("left",mainWidth);
        $(".mainText section").eq(i).css("left",screenWidth);
    }

//    设置两个按钮鼠标悬浮事件的事件
    $("#click-left em").hover(function(){
        $("#click-left em").css({"border-color":"transparent #000000  transparent transparent",});
        $("#click-left span").css("background-color","#000");
    },function(){
        $("#click-left em").css({"border-color":"transparent #B9B9C8  transparent transparent"});
        $("#click-left span").css("background-color","#B9B9C8");
    });
    $("#click-right em").hover(function(){
        $("#click-right em").css({"border-color":"transparent transparent transparent #000000",});
        $("#click-right span").css("background-color","#000");
    },function(){
        $("#click-right em").css({"border-color":"transparent transparent transparent #B9B9C8"});
        $("#click-right span").css("background-color","#B9B9C8");
    });
//    设置暂停停止按钮事件
$("#nav-right").on("click",function(){
    if($("#nav-right div").hasClass("start"))
    {
            $("#nav-right div").removeClass("start").addClass("stop");
            clearInterval(timer1);
    }
    else {
        $("#nav-right div").removeClass("stop").addClass("start");
        timer1 = setInterval(autoPlay,3000);
    }
});
    var key = 0;
//左右按键点击事件
//    左键
    $("#click-left").on("click",function(){
        $("#main div").eq(key).animate({"left":mainWidth},500);
        $(".mainText section").eq(key).animate({"left":screenWidth},500);
        --key<0?key=3:key;
        $("#main div").eq(key).css("left",-mainWidth);
        $(".mainText section").eq(key).css("left",-screenWidth);
        $("#main div").eq(key).animate({"left":0},500);
        $(".mainText section").eq(key).animate({"left":0},500);
    });
//    右键
    $("#click-right").on("click",function(){
        autoPlay();
    });


//   自动播放

   // timer1 = setInterval(autoPlay,3000);
    function autoPlay(){
        $("#main div").eq(key).animate({"left":-mainWidth},500);
        $(".mainText section").eq(key).animate({"left":-screenWidth},500);
        ++key>3?key=0:key;
        $("#main div").eq(key).css("left",mainWidth);
        $(".mainText section").eq(key).css("left",screenWidth);
        $("#main div").eq(key).animate({"left":0},500);
        $(".mainText section").eq(key).animate({"left":0},500);
    }
//往画布填充内容
//    一、创建舞台

    $.ajax({
        url:"abc.php",
        type:"post",
        dataType:"json",
        data:{},
        success:function (data){

        },
        error:function(){}
    });
var stage = new Konva.Stage({
    container:'sec1',
    width:screenWidth,
    height:screenHeight-100
});
//    创建层
    var layer = new Konva.Layer();
    stage.add(layer);
//    中心坐标
    var cenx = stage.width()/2;
    var ceny = stage.height()/2;
    //
    var x01 = 1/10*stage.width();   //设定的原坐标
    var y01 = 2/5*stage.height();    //第一条底线的纵坐标
    var y02 = 9/10*stage.height();    //第二条底线的纵坐标
    var width1 = 4/5*stage.width();  //设定的柱状图的总宽度
    var bsline1 = new Konva.Line({       //画柱状图的底线
        points:[x01,y01,x01+width1,y01],
        strokeWidth:3,
        stroke:"black"
    });

    var bsline2 = new Konva.Line({
        points:[x01,y02,x01+width1,y02],
        strokeWidth:3,
        stroke:"black"
    });
    layer.add(bsline1);
    layer.add(bsline2);
    layer.draw();

});
