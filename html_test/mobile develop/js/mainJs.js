$(function(){
    setbgImage();
    $(window).on("resize",function(){
        setbgImage();
    });
    function setbgImage(){
        //获取屏幕宽度
        var screenWidth = $(window).width();
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
});
