$(function(){
   var screenWidth = $(window).width();     //获取屏幕宽度
    var screenHeight = $(window).height(); //获取屏幕高度
    //根据屏幕设置宽高度
    $(".manageSystem #banner .main").css("width",screenWidth);
    $(".main").css("height",screenHeight-121);
//    设置导航栏鼠标放置的动作
    $("#nav-manage, #nav-report").hover(function(){
       $(this).addClass("ui-state-hover")
    },function(){
        $(this).removeClass("ui-state-hover");
    });
    //导航栏点击时出现相应的操作
    $("#nav-manage").on("click",function(){
        $(this).addClass("ui-state-active").removeClass("ui-corner-all").siblings("section").addClass("ui-corner-all").removeClass("ui-state-active");
        $("#manage").removeClass("yinCan");
        $("#report").addClass("yinCan");
        $("#triangle1").addClass("ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-e");
        $("#triangle2").addClass("ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-s");

    });
    $("#nav-report").on("click",function(){
        $(this).addClass("ui-state-active").removeClass("ui-corner-all").siblings("section").addClass("ui-corner-all").removeClass("ui-state-active");
        $("#report").removeClass("yinCan");
        $("#manage").addClass("yinCan");
        $("#triangle2").addClass("ui-icon-triangle-1-s").removeClass("ui-icon-triangle-1-e");
        $("#triangle1").addClass("ui-icon-triangle-1-e").removeClass("ui-icon-triangle-1-s");
    });

});