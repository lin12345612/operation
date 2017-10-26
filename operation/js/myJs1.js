
$(function(){
    var timer1 = null; //控制播放的定时器
    var timer2 =null;  //控制获取数据的定时器
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

    //timer1 = setInterval(autoPlay,3000);
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
    getAndShow();
    var timer2 =setInterval(getAndShow,5000);
    function getAndShow() {
        $.ajax({
            url: "abc.php",
            type: "post",
            dataType: "json",
            data: {},
            success: function (data) {

                //    一、创建舞台
                var stage = new Konva.Stage({
                    container: 'sec1',
                    width: screenWidth,
                    height: screenHeight - 100
                });
                //    创建层
                var layer = new Konva.Layer();
                stage.add(layer);
                //    中心坐标
                var cenx = stage.width() / 2;
                var ceny = stage.height() / 2;
                //
                var num = data.feed.length;     //数组的个数
                console.log(num);
                var x01 = 1 / 16 * stage.width();   //设定的原坐标
                var y01 = 2 / 5 * stage.height();    //第一条底线的纵坐标
                var y02 = 9 / 10 * stage.height();    //第二条底线的纵坐标
                var width1 = 7 / 8 * stage.width();  //设定的柱状图的总宽度
                var xWidth = 1 / 24 * width1;        //设定每个点之间的间距
                var eachWidth = 1 / 6 * width1;    //每个小时的宽度为总宽度的1/6
                var bsline1 = new Konva.Line({       //画柱状图的底线
                    points: [x01, y01, x01 + width1, y01],
                    strokeWidth: 3,
                    stroke: "black"
                });

                var bsline2 = new Konva.Line({
                    points: [x01, y02, x01 + width1, y02],
                    strokeWidth: 3,
                    stroke: "black"
                });
                layer.add(bsline1);
                layer.add(bsline2);

                for (var k = 0; k < 6; k++) {
                    var rect = new Konva.Rect({
                        x: x01 + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].total,
                        width: 7 / 27 * eachWidth,
                        height: data.feed[k].total,
                        fill: "black"
                    });
                    var text = new Konva.Text({
                        x: x01 + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].total - 15,
                        fontSize: 15,
                        text: data.feed[k].total,
                        width: 7 / 27 * eachWidth,
                        Align: "center"
                    });
                    var textBottom = new Konva.Text({
                        x: x01 + (1 / 2 + k) * eachWidth - 10,
                        y: y01 + 10,
                        fontSize: 18,
                        text: data.feed[k].time,
                        width: 7 / 27 * eachWidth,
                        Align: "center"
                    });
                    var rect1 = new Konva.Rect({
                        x: x01 + 7 / 27 * eachWidth + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].suc,
                        width: 7 / 27 * eachWidth,
                        height: data.feed[k].suc,
                        fill: "green"
                    });
                    var text1 = new Konva.Text({
                        x: x01 + 7 / 27 * eachWidth + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].suc - 15,
                        fontSize: 15,
                        text: data.feed[k].suc,
                        width: 7 / 27 * eachWidth,
                        Align: "center"
                    });
                    var rect2 = new Konva.Rect({
                        x: x01 + 14 / 27 * eachWidth + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].fail,
                        width: 7 / 27 * eachWidth,
                        height: data.feed[k].fail,
                        fill: "red"
                    });
                    var text2 = new Konva.Text({
                        x: x01 + 14 / 27 * eachWidth + (1 / 6 + k) * eachWidth,
                        y: y01 - data.feed[k].fail - 15,
                        fontSize: 15,
                        text: data.feed[k].fail,
                        width: 7 / 27 * eachWidth,
                        Align: "center"
                    });
                    layer.add(rect);
                    layer.add(text);
                    layer.add(textBottom);
                    layer.add(rect1);
                    layer.add(text1);
                    layer.add(rect2);
                    layer.add(text2);
                }
                //
                for (var q = 0; q < num - 1; q++) {
                    var totalLine = new Konva.Line({       //总数折线
                        points: [x01 + q * xWidth, y02 - parseInt(data.feed[q].total), x01 + [q + 1] * xWidth, y02 - parseInt(data.feed[(q + 1)].total)],
                        strokeWidth: 3,
                        stroke: "black"
                    });
                    var sucLine = new Konva.Line({       //成功数折线
                        points: [x01 + q * xWidth, y02 - parseInt(data.feed[q].suc), x01 + [q + 1] * xWidth, y02 - parseInt(data.feed[(q + 1)].suc)],
                        strokeWidth: 3,
                        stroke: "green"
                    });
                    var failLine = new Konva.Line({       //失败数折线
                        points: [x01 + q * xWidth, y02 - parseInt(data.feed[q].fail), x01 + [q + 1] * xWidth, y02 - parseInt(data.feed[(q + 1)].fail)],
                        strokeWidth: 3,
                        stroke: "red"
                    });
                    layer.add(totalLine);
                    layer.add(sucLine);
                    layer.add(failLine);
                }
                for (var w = 0; w < num; w++) {
                    var toatlNum = new Konva.Text({
                        x: x01 + w * xWidth,
                        y: y02 - parseInt(data.feed[q].total) - 20,
                        fontSize: 15,
                        text: data.feed[w].total,
                    });
                    var sucNum = new Konva.Text({
                        x: x01 + w * xWidth,
                        y: y02 - parseInt(data.feed[q].suc) + 5,
                        fontSize: 15,
                        text: data.feed[w].suc,
                    });
                    var failNum = new Konva.Text({
                        x: x01 + w * xWidth,
                        y: y02 - parseInt(data.feed[q].fail) - 15,
                        fontSize: 15,
                        text: data.feed[w].fail,
                    });

                    var showTime = new Konva.Text({
                        x: x01 + w * xWidth - 10,
                        y: y02 + 5,
                        fontSize: 15,
                        text: data.feed[w].time,
                    });
                    var warm = new Konva.Rect({
                        x: x01 + w * xWidth,
                        y: y02 - 5,
                        width: 2,
                        height: 5,
                        fill: "black"
                    });
                    layer.add(toatlNum);
                    layer.add(sucNum);
                    layer.add(failNum);
                    layer.add(showTime);
                    layer.add(warm);
                }

                layer.draw();


            },
            error: function () {
                console.log(33);
            }
        });
    }
});