$(function(){
    setbgImage();
    $(window).on("resize",function(){
        var screenWidth = $(window).width();
        setbgImage(screenWidth);
        setTab();

    });
    function setbgImage(screenWidth){
        //获取屏幕宽度

//    判断屏幕类型
        var isSmallScreen = screenWidth < 768 ;
        $("#main_ad > .carousel-inner > .item").each(function(index ,value){
            var $value = $(value);
            var srcImg =isSmallScreen ? $value.data( "image-xm") :$value.data("image-lg");
            //$value.css("backgroundImage","url('" + srcImg + "')");
            if(isSmallScreen){
                var imgs = "<img src='" + srcImg + "'>";
                //$value.removeAttr("backgroundImage");
                $value.html(imgs);
            }else{
                $value.empty();
                $value.css("backgroundImage","url('" + srcImg + "')");
            }
        });
    }
    $('[data-toggle="tooltip"]').tooltip();
//    设置tab栏的ul外边框宽度
    function setTab(){
        var liNumWidth = 30;
        $(".nav-tabs li").each(function(index,element){
            liNumWidth += element.clientWidth;
        });
        if(liNumWidth > $(window).width()){
            $(".nav-tabs").css("width",liNumWidth).parent().css("overflow-x","scroll");

        }
    }

//给新闻导航栏设置点击事件
    $(".main-new-two li").on("click",function(){
        $(".main-new-one").text($(this).data("description"));
    });

    //轮播图向左向右滑动


var startX,endX;
    $(".carousel").on("touchstart",function(e){
        startX = e.originalEvent.touches[0].clientX;
    });
    $(".carousel").on("touchmove",function(e){
        endX = e.originalEvent.touches[0].clientX;
    });
    $(".carousel").on("touchend",function(e){
        if(Math.abs(startX-endX) > 40){
            if(startX > endX ){
                $("#main_ad").carousel("next");
            }else{
                $("#main_ad").carousel("prev");
            }
        }
    });
});
